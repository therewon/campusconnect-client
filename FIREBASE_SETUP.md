# Firebase mesajlaşma qurulması

## 1. Firebase Console

Firebase layihəsində Firestore Database və Authentication aktiv edin. Authentication
bölməsində **Sign-in method → Anonymous** provider-i aktivləşdirin. Layihənin Web App
konfiqurasiyasını `.env` faylına əlavə edin.

`firestore.rules` faylındakı qaydaları Firebase Console-da Firestore Rules bölməsinə
yerləşdirib publish edin:

```bash
firebase deploy --only firestore:rules
```

## 2. Login olmayan sayt üçün

`.env` faylında `VITE_FIREBASE_AUTH_MODE=anonymous` saxlayın. İstifadəçi ayrıca
login olmadan Firebase tərəfindən anonim autentifikasiya edilir.

## 3. Backend custom token endpoint-i (opsional)

Frontend mövcud CampusConnect JWT sessiyasını istifadə edir. Backend-də Firebase Admin
SDK ilə yalnız login olmuş istifadəçiyə custom token qaytaran endpoint yaradılmalıdır:

```http
POST /api/Auth/firebase-token
Authorization: Bearer <campusconnect-access-token>

200 OK
{
  "token": "<firebase-custom-token>"
}
```

Token yaradılarkən Firebase UID mütləq backend JWT-dəki user ID ilə eyni olmalıdır.
Məsələn, .NET Firebase Admin SDK-da:

```csharp
var token = await FirebaseAuth.DefaultInstance
    .CreateCustomTokenAsync(currentUserId);
return Ok(new { token });
```

Service account açarı frontend-ə əlavə edilməməlidir; yalnız backend secret storage-da
saxlanmalıdır.

Bu variant üçün `VITE_FIREBASE_AUTH_MODE=custom` təyin edilməlidir.

## 4. Söhbət başlatmaq

Mövcud söhbətlər `/messages` səhifəsində real vaxtda görünür. İstifadəçi profilindən yeni
söhbət başlatmaq üçün bu URL formatından istifadə edin:

```text
/messages?recipientId=USER_ID&recipientName=USER_NAME
```

Firestore strukturu:

```text
conversations/{sorted-user-ids}
conversations/{sorted-user-ids}/messages/{message-id}
```
