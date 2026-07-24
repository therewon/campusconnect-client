export const courses = [
  {
    id: 1,
    title: "Alqoritmlər və Verilənlər Strukturu",
    status: "active",
    instructor: "Dr. Murad Əliyev",
    progress: 65,
    nextTask: {
      type: "Homework",
      title: "Homework #3",
      deadline: "28 Okt",
    },
    action: {
      label: "Kursa keçid",
      href: "#",
    },
  },
  {
    id: 2,
    title: "Proqramlaşdırma Dilləri",
    status: "active",
    instructor: "Prof. Leyla Məmmədova",
    progress: 82,
    nextTask: {
      type: "Lesson",
      title: "Lab #5: Python OOP",
      deadline: "Sabah, 10:00",
    },
    action: {
      label: "Kursa keçid",
      href: "#",
    },
  },
  {
    id: 3,
    title: "Kompüter Şəbəkələri",
    status: "completed",
    instructor: "Rəşad Quliyev",
    progress: 100,
    nextTask: {
      type: "Status",
      title: "Bütün tapşırıqlar bitib",
      deadline: null,
    },
    action: {
      label: "Arxivə bax",
      href: "#",
    },
  },
];