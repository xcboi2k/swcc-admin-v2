"use client"

import React, { useEffect, useRef, useState } from 'react'
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import Image from 'next/image';

import { useBA20132014Store } from '@/stores/useBA20132014Store';

type PropType = {
    collection: string,
    id: string,
}

interface Figure {
    id: string;
    figure_number: string;
    figure_name: string;
    figure_version: string;
    figure_date_stamp: string;
    figure_release_date: string;
    figure_joint_count: string;
    figure_accessory_count: string;
    figure_accessory_details: string;
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

const EditForm: React.FC<PropType> = (props) => {
    const { collection, id } = props

    const inputRef = useRef<HTMLInputElement | null>(null);
    const hasSelectedFile = useRef<boolean | null>(null);
    const [selectedFile, setSelectedFile] = useState<{ source: string | null, file: File | null } | null>(null);
    const [imageBlob, setImageBlob] = useState<any>()

    // FILES
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        if (file) {
            hasSelectedFile.current = true;
            const fileSrc = URL.createObjectURL(file);
            setSelectedFile({ source: fileSrc, file });
            // console.log(e.target.files);
            const imageUrl = URL.createObjectURL(file);
            setImageBlob(imageUrl)
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

    const [currentFigure, setCurrentFigure] = useState<Figure | undefined>(undefined);

    // form values
    const initialValues: formValues = { 
        number: currentFigure?.figure_number ?? '',
        name: currentFigure?.figure_name ?? '',
        version: currentFigure?.figure_version ?? '',
        dateStamp: currentFigure?.figure_date_stamp ?? '',
        releaseDate: currentFigure?.figure_release_date ?? '',
        jointCount: currentFigure?.figure_joint_count ?? '',
        accessoryCount: currentFigure?.figure_accessory_count ?? '',
        accessoryDetails: currentFigure?.figure_accessory_details ?? ''
    };

    const loadValues  = {
        number: currentFigure?.figure_number,
        name: currentFigure?.figure_name,
        version: currentFigure?.figure_version,
        dateStamp: currentFigure?.figure_date_stamp,
        releaseDate: currentFigure?.figure_release_date,
        jointCount: currentFigure?.figure_joint_count,
        accessoryCount: currentFigure?.figure_accessory_count,
        accessoryDetails: currentFigure?.figure_accessory_details
    }

    // FETCH DATA
    const figures: Figure[] = useBA20132014Store((state) => state.figures);
    useEffect(() => {
        // GET THEN VALUES OF THE FIGURE
        const current = figures.find((item) => item.id === id);
        console.log('current figure', current)

        // SET THE VALUE OF THE FIELDS
        // setSelectedFile({source: current?.photoUrl});

        setCurrentFigure(current);
    }, [id]);

    // FORMS
    const addFigure = useBA20132014Store((state) => state.addFigure)
    const handleSubmit = (values: any) => {
        console.log('add inputs:', values);
        console.log('add file:', selectedFile?.file)
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
        <>
            {/* <div className="text-[18px] text-secondary1 font-semibold">Collection: {collection}</div>
            <div className="text-[18px] text-secondary1 font-semibold">Figure ID: {id}</div> */}
        <Formik
            initialValues={currentFigure ? loadValues : initialValues}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {() => (
                <div className="flex flex-col items-center justify-center py-10 px-20">
                    <Form className='w-full flex items-center justify-between'>
                        <div className='w-[70%] flex flex-col'>
                            <div className='w-[80%] flex flex-col mb-[20px]'>
                                <div className="text-[18px] text-secondary1 font-semibold">Figure Number</div>
                                <div >
                                    <Field type="number" id="number" name="number" placeholder="Enter figure number"
                                    className='w-full rounded-md border-2 p-[15px]'/>
                                </div>
                                
                                <ErrorMessage name="number" component="div" />
                            </div>
                            <div className='w-[80%] flex flex-col mb-[20px]'>
                                <div className="text-[18px] text-secondary1 font-semibold">Figure Name</div>
                                <div >
                                    <Field type="text" id="name" name="name" placeholder="Enter figure name"
                                    className='w-full rounded-md border-2 p-[15px]'/>
                                </div>
                                
                                <ErrorMessage name="name" component="div" />
                            </div>
                            <div className='w-[80%] flex flex-col mb-[20px]'>
                                <div className="text-[18px] text-secondary1 font-semibold">Figure Version</div>
                                <div >
                                    <Field type="text" id="version" name="version" placeholder="Enter figure version"
                                    className='w-full rounded-md border-2 p-[15px]'/>
                                </div>
                                
                                <ErrorMessage name="version" component="div" />
                            </div>
                            <div className='w-[80%] flex flex-col mb-[20px]'>
                                <div className="text-[18px] text-secondary1 font-semibold">Figure Date Stamp</div>
                                <div >
                                    <Field type="number" id="dateStamp" name="dateStamp" placeholder="Enter figure date stamp"
                                    className='w-full rounded-md border-2 p-[15px]'/>
                                </div>
                                
                                <ErrorMessage name="dateStamp" component="div" />
                            </div>
                            <div className='w-[80%] flex flex-col mb-[20px]'>
                                <div className="text-[18px] text-secondary1 font-semibold">Figure Release Date</div>
                                <div >
                                    <Field type="number" id="releaseDate" name="releaseDate" placeholder="Enter figure release date"
                                    className='w-full rounded-md border-2 p-[15px]'/>
                                </div>
                                
                                <ErrorMessage name="releaseDate" component="div" />
                            </div>
                            <div className='w-[80%] flex flex-col mb-[20px]'>
                                <div className="text-[18px] text-secondary1 font-semibold">Figure Joint Count</div>
                                <div >
                                    <Field type="number" id="jointCount" name="jointCount" placeholder="Enter figure joint count"
                                    className='w-full rounded-md border-2 p-[15px]'/>
                                </div>
                                
                                <ErrorMessage name="jointCount" component="div" />
                            </div>
                            <div className='w-[80%] flex flex-col mb-[20px]'>
                                <div className="text-[18px] text-secondary1 font-semibold">Figure Accessory Count</div>
                                <div >
                                    <Field type="number" id="accessoryCount" name="accessoryCount" placeholder="Enter figure accessory count"
                                    className='w-full rounded-md border-2 p-[15px]'/>
                                </div>
                                
                                <ErrorMessage name="accessoryCount" component="div" />
                            </div>
                            <div className='w-[80%] flex flex-col mb-[20px]'>
                                <div className="text-[18px] text-secondary1 font-semibold">Figure Accessory Details</div>
                                <div >
                                    <Field type="text" id="accessoryDetails" name="accessoryDetails" placeholder="Enter figure accessory details"
                                    className='w-full rounded-md border-2 p-[15px]'/>
                                </div>
                                
                                <ErrorMessage name="accessoryDetails" component="div" />
                            </div>
                        </div>
                        
                        <div className='w-[30%] flex flex-col items-center justify-between'>
                            {
                                selectedFile ? (
                                    <>
                                        <Image src={imageBlob} alt="selected-file" width={100} height={100} quality={100}
                                        className='w-[500px] h-[680px] object-cover rounded-md mb-[20px]'/>
                                        <div className="px-[45px] py-[15px] rounded-md bg-secondary1 cursor-pointer mb-[20px]" onClick={() => inputRef.current?.click()}>
                                            <input
                                                type='file'
                                                onChange={handleFileSelect}
                                                onClick={handleFileClick}
                                                accept='image/*'
                                                ref={inputRef}
                                                hidden
                                            />
                                            <div className="flex items-center">
                                                <div className="text-[16px] text-primary text-center font-bold">
                                                    Upload another image
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="px-[45px] py-[15px] rounded-md bg-secondary1 cursor mb-[20px]" onClick={() => inputRef.current?.click()}>
                                        <input
                                            type='file'
                                            onChange={handleFileSelect}
                                            onClick={handleFileClick}
                                            accept='image/*'
                                            ref={inputRef}
                                            hidden
                                        />
                                        <div className="flex items-center">
                                            <div className="text-[16px] text-primary text-center font-bold">
                                                Upload image
                                            </div>
                                        </div>
                                    </div>
                                )
                                
                            }
                                <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                                    type="submit"
                                >
                                    <div className="flex items-center">
                                        <div className="text-[16px] text-primary text-center font-bold">Submit</div>
                                    </div>
                                </button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
        </>
    )
}

export default EditForm