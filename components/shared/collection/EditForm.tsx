"use client"

import React, { useEffect, useRef, useState } from 'react'
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import Image from 'next/image';

import { useBA20132014Store } from '@/stores/useBA20132014Store';
import { useBA20142015Store } from '@/stores/useBA20142015Store';
import { useBA20152017Store } from '@/stores/useBA20152017Store';
import { useEX20142015Store } from '@/stores/useEX20142015Store';
import { useMU20152017Store } from '@/stores/useMU20152017Store';
import { useRouter } from 'next/navigation';

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
    photoUrl: string;
    photoRef: string;
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

    const router = useRouter()

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
    const [currentFigureImg, setCurrentFigureImg] = useState<string | undefined>('');

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
    const BA20132014Figures: Figure[] = useBA20132014Store((state) => state.figures);
    const BA20142015Figures: Figure[] = useBA20142015Store((state) => state.figures);
    const BA20152017Figures: Figure[] = useBA20152017Store((state) => state.figures);
    const EX20142015Figures: Figure[] = useEX20142015Store((state) => state.figures);
    const MU20152017Figures: Figure[] = useMU20152017Store((state) => state.figures);
    
    useEffect(() => {
        switch (collection) {
            case 'ba20132014':
                const currentBA20132014 = BA20132014Figures.find((item) => item.id === id);
                console.log('current figure', currentBA20132014)

                setCurrentFigure(currentBA20132014);
                setCurrentFigureImg(currentBA20132014?.photoUrl)
                break;
            case 'ba20142015':
                const currentBA20142015 = BA20142015Figures.find((item) => item.id === id);
                console.log('current figure', currentBA20142015)

                setCurrentFigure(currentBA20142015);
                setCurrentFigureImg(currentBA20142015?.photoUrl)
                break;
            case 'ba20152017':
                const currentBA20152017 = BA20152017Figures.find((item) => item.id === id);
                console.log('current figure', currentBA20152017)

                setCurrentFigure(currentBA20152017);
                setCurrentFigureImg(currentBA20152017?.photoUrl)
                break;
            case 'ex20142015':
                const currentEX20142015 = EX20142015Figures.find((item) => item.id === id);
                console.log('current figure', currentEX20142015)

                setCurrentFigure(currentEX20142015);
                setCurrentFigureImg(currentEX20142015?.photoUrl)
                break;
            case 'mu20152017':
                const currentMU20152017 = MU20152017Figures.find((item) => item.id === id);
                console.log('current figure', currentMU20152017)

                setCurrentFigure(currentMU20152017);
                setCurrentFigureImg(currentMU20152017?.photoUrl)
                break;
            default:
                break;
        }
    }, [id, collection]);

    // FORMS
    const updateFigureBA20132014 = useBA20132014Store((state) => state.updateFigure)
    const updateFigureBA20142015 = useBA20142015Store((state) => state.updateFigure)
    const updateFigureBA20152017 = useBA20152017Store((state) => state.updateFigure)
    const updateFigureEX20142015 = useEX20142015Store((state) => state.updateFigure)
    const updateFigureMU20152017 = useMU20152017Store((state) => state.updateFigure)

    const handleSubmit = (values: any) => {
        console.log('update inputs:', values);
        console.log('update file:', selectedFile?.file)
        switch (collection) {
            case 'ba20132014':
                updateFigureBA20132014(id, { 
                    figure_number: values.number,
                    figure_name: values.name,
                    figure_version: values.version,
                    figure_date_stamp: values.dateStamp,
                    figure_release_date: values.releaseDate,
                    figure_joint_count: values.jointCount,
                    figure_accessory_count: values.accessoryCount,
                    figure_accessory_details: values.accessoryDetails,
                }, selectedFile ? selectedFile?.file : currentFigureImg).then((success) => {
                    if (success) {
                        router.push('dashboard');
                    }
                });
                break;
            case 'ba20142015':
                updateFigureBA20142015(id, { 
                    figure_number: values.number,
                    figure_name: values.name,
                    figure_version: values.version,
                    figure_date_stamp: values.dateStamp,
                    figure_release_date: values.releaseDate,
                    figure_joint_count: values.jointCount,
                    figure_accessory_count: values.accessoryCount,
                    figure_accessory_details: values.accessoryDetails,
                }, selectedFile ? selectedFile?.file : currentFigureImg).then((success) => {
                    if (success) {
                        router.push('dashboard');
                    }
                });
                break;
            case 'ba20152017':
                updateFigureBA20152017(id, { 
                    figure_number: values.number,
                    figure_name: values.name,
                    figure_version: values.version,
                    figure_date_stamp: values.dateStamp,
                    figure_release_date: values.releaseDate,
                    figure_joint_count: values.jointCount,
                    figure_accessory_count: values.accessoryCount,
                    figure_accessory_details: values.accessoryDetails,
                }, selectedFile ? selectedFile?.file : currentFigureImg).then((success) => {
                    if (success) {
                        router.push('dashboard');
                    }
                });
                break;
            case 'ex20142015':
                updateFigureMU20152017(id, { 
                    figure_number: values.number,
                    figure_name: values.name,
                    figure_version: values.version,
                    figure_date_stamp: values.dateStamp,
                    figure_release_date: values.releaseDate,
                    figure_joint_count: values.jointCount,
                    figure_accessory_count: values.accessoryCount,
                    figure_accessory_details: values.accessoryDetails,
                }, selectedFile ? selectedFile?.file : currentFigureImg).then((success) => {
                    if (success) {
                        router.push('dashboard');
                    }
                });
                break;
            case 'mu20152017':
                updateFigureEX20142015(id, { 
                    figure_number: values.number,
                    figure_name: values.name,
                    figure_version: values.version,
                    figure_date_stamp: values.dateStamp,
                    figure_release_date: values.releaseDate,
                    figure_joint_count: values.jointCount,
                    figure_accessory_count: values.accessoryCount,
                    figure_accessory_details: values.accessoryDetails,
                }, selectedFile ? selectedFile?.file : currentFigureImg).then((success) => {
                    if (success) {
                        router.push('dashboard');
                    }
                });
                break;
            default:
                break;
        }
        formik.resetForm();
        setSelectedFile(null);
    };

    const formik = useFormik({    
        initialValues,
        onSubmit: handleSubmit
    });

    const deleteFigureBA20132014 = useBA20132014Store((state) => state.deleteFigure)
    const deleteFigureBA20142015 = useBA20142015Store((state) => state.deleteFigure)
    const deleteFigureBA20152017 = useBA20152017Store((state) => state.deleteFigure)
    const deleteFigureEX20142015 = useEX20142015Store((state) => state.deleteFigure)
    const deleteFigureMU20152017 = useMU20152017Store((state) => state.deleteFigure)

    const handleDelete = () => {
        switch (collection) {
            case 'ba20132014':
                deleteFigureBA20132014(id , currentFigure?.photoRef || '').then((success) => {
                    if (success) {
                        router.push('dashboard');
                    }
                });
                break;
            case 'ba20142015':
                deleteFigureBA20142015(id , currentFigure?.photoRef || '').then((success) => {
                    if (success) {
                        router.push('dashboard');
                    }
                });
                break;
            case 'ba20152017':
                deleteFigureBA20152017(id , currentFigure?.photoRef || '').then((success) => {
                    if (success) {
                        router.push('dashboard');
                    }
                });
                break;
            case 'ex20142015':
                deleteFigureEX20142015(id , currentFigure?.photoRef || '').then((success) => {
                    if (success) {
                        router.push('dashboard');
                    }
                });
                break;
            case 'mu20152017':
                deleteFigureMU20152017(id , currentFigure?.photoRef || '').then((success) => {
                    if (success) {
                        router.push('dashboard');
                    }
                });
                break;
            default:
                break;
        }
    };

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
                                currentFigureImg ? (
                                    <>
                                        <Image src={currentFigureImg} alt="selected-file" width={100} height={100} quality={100}
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
                                                    Update image
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
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
                                    
                                )
                            }
                            <div className='flex justify-between w-[80%]'>
                                <button className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                                    type="submit"
                                >
                                    <div className="flex items-center">
                                        <div className="text-[16px] text-primary text-center font-bold">Update</div>
                                    </div>
                                </button>
                                <button className="px-[45px] py-[15px] inline-block rounded-full bg-[#F71A09]"
                                    onClick={handleDelete}>
                                    <div className="flex items-center">
                                        <div className="text-[16px] text-white text-center font-bold">Delete</div>
                                    </div>
                                </button>
                            </div>
                                
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
        </>
    )
}

export default EditForm