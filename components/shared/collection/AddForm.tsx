"use client"

import React, { useRef, useState } from 'react'
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { useBA20132014Store } from '@/stores/useBA20132014Store';

type PropType = {
    id: string,
}

type formValues = {
    number: string,
    name: string,
    version: string,
    dateStamp: string,
    releaseDate: string,
    jointCount: string,
    accessoryCount: string,
    accessoryDetails: string
}

const AddForm: React.FC<PropType> = (props) => {
    const { id } = props

    const inputRef = useRef<HTMLInputElement | null>(null);
    const hasSelectedFile = useRef<boolean | null>(null);
    const [selectedFile, setSelectedFile] = useState<{ source: string | null, file: File | null } | null>(null);

    // FILES
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        if (file) {
            hasSelectedFile.current = true;
            const fileSrc = URL.createObjectURL(file);
            setSelectedFile({ source: fileSrc, file });
            // console.log(e.target.files);
        }
    
        focusBack();
    };
    
    const handleFileClick = () => {
        hasSelectedFile.current = false;
        window.addEventListener('focus', focusBack);
    };

    const focusBack = () => {
        if (!hasSelectedFile.current) {
            setSelectedFile(null);
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    
        window.removeEventListener('focus', focusBack);
    };

    // form values
    const initialValues: formValues = { 
        number: '',
        name: '',
        version: '',
        dateStamp: '',
        releaseDate: '',
        jointCount: '',
        accessoryCount: '',
        accessoryDetails: ''
    };


    // FORMS
    const addFigure = useBA20132014Store((state) => state.addFigure)
    const handleSubmit = (values: any) => {
        console.log('add inputs:', values);
        // addFigure({ 
        //     figure_number: values.number,
        //     figure_name: values.name,
        //     figure_version: values.version,
        //     figure_date_stamp: values.dateStamp,
        //     figure_release_date: values.releaseDate,
        //     figure_joint_count: values.jointCount,
        //     figure_accessory_count: values.accessoryCount,
        //     figure_accessory_details: values.accessoryDetails,
        // }, selectedFile?.file);
        formik.resetForm();
        setSelectedFile(null);
    };

    const formik = useFormik({    
        initialValues,
        onSubmit: handleSubmit
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            >
            {() => (
                <div className="flex flex-col items-center justify-between py-10 px-20">
                    <Form className='w-full flex flex-col items-center justify-center'>
                        <div className='w-[80%] flex flex-col mb-[20px]'>
                            <div className="text-[18px] text-secondary1 font-semibold">Name</div>
                            <div >
                                <Field type="text" id="name" name="name" placeholder="First Last"
                                className='w-full rounded-md border-2 p-[15px]'/>
                            </div>
                            
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div className='w-[80%] flex flex-col mb-[20px]'>
                            <div className="text-[18px] text-secondary1 font-semibold">Name</div>
                            <div >
                                <Field type="text" id="name" name="name" placeholder="First Last"
                                className='w-full rounded-md border-2 p-[15px]'/>
                            </div>
                            
                            <ErrorMessage name="name" component="div" />
                        </div>
                            
                
                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                </div>
                
            )}
        </Formik>
        
    )
}

export default AddForm