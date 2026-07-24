import React, { useState } from 'react'
import AddModal from './AddModal';

const Add = ({setIsOpen}: {setIsOpen : any}) => {
    

    return (
        <div 
        onClick={() => setIsOpen(true)}
        className="h-full min-h-88 bg-surface-container border-2 border-dashed border-outline-variant rounded-xl p-md flex flex-col items-center justify-center gap-md shadow-none hover:bg-surface-container-high transition-all cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-container shadow-sm">
                <span className="material-symbols-outlined text-[32px]">
                    add_circle
                </span>
            </div>
            <div className="text-center">
                <p className="font-bold text-on-surface">Yeni Məhsul Əlavə Et</p>
                {/* <p className="text-xs text-on-surface-variant">
                                    Kataloqdan seçim edin
                                </p> */}
                
            </div>
        </div>
    )
}

export default Add
