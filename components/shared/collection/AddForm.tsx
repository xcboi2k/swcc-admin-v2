'use client'

import { Form, Formik, useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import * as Yup from 'yup'

import { useHideLoader } from '@/hooks/useHideLoader'
import { useBA20132014Store } from '@/stores/useBA20132014Store'
import { useBA20142015Store } from '@/stores/useBA20142015Store'
import { useBA20152017Store } from '@/stores/useBA20152017Store'
import { useEX20142015Store } from '@/stores/useEX20142015Store'
import useLoaderStore from '@/stores/useLoaderStore'
import { useMU20152017Store } from '@/stores/useMU20152017Store'
import Image from 'next/image'
import Loader from '../components/Loader'
import TextInput from '../components/TextInput'

type PropType = {
    id: string
}

type formValues = {
    number: string
    name: string
    version: string
    dateStamp: string
    releaseDate: string
    jointCount: string
    accessoryCount: string
    accessoryDetails: string
}

const AddForm: React.FC<PropType> = (props) => {
    const { id } = props

    const { showLoader } = useLoaderStore()

    const inputRef = useRef<HTMLInputElement | null>(null)
    const hasSelectedFile = useRef<boolean | null>(null)
    const [selectedFile, setSelectedFile] = useState<{
        source: string | null
        file: File | null
    } | null>(null)
    const [imageBlob, setImageBlob] = useState<any>()

    useHideLoader()

    // FILES
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (file) {
            hasSelectedFile.current = true
            const fileSrc = URL.createObjectURL(file)
            setSelectedFile({ source: fileSrc, file })
            // console.log(e.target.files);
            const imageUrl = URL.createObjectURL(file)
            setImageBlob(imageUrl)
        }

        focusBack()
    }

    const handleFileClick = () => {
        hasSelectedFile.current = false
        window.addEventListener('focus', focusBack)
    }

    const focusBack = () => {
        if (!hasSelectedFile.current) {
            setSelectedFile(null)
            if (inputRef.current) {
                inputRef.current.value = ''
            }
        }

        window.removeEventListener('focus', focusBack)
    }

    // form values
    const initialValues: formValues = {
        number: '',
        name: '',
        version: '',
        dateStamp: '',
        releaseDate: '',
        jointCount: '',
        accessoryCount: '',
        accessoryDetails: '',
    }

    // FORMS
    const addFigureBA20132014 = useBA20132014Store((state) => state.addFigure)
    const addFigureBA20142015 = useBA20142015Store((state) => state.addFigure)
    const addFigureBA20152017 = useBA20152017Store((state) => state.addFigure)
    const addFigureEX20142015 = useEX20142015Store((state) => state.addFigure)
    const addFigureMU20152017 = useMU20152017Store((state) => state.addFigure)

    const handleSubmit = (values: any) => {
        console.log('add inputs:', values)
        console.log('add file:', selectedFile?.file)
        showLoader()
        switch (id) {
            case 'ba20132014':
                addFigureBA20132014(
                    {
                        figure_number: values.number,
                        figure_name: values.name,
                        figure_version: values.version,
                        figure_date_stamp: values.dateStamp,
                        figure_release_date: values.releaseDate,
                        figure_joint_count: values.jointCount,
                        figure_accessory_count: values.accessoryCount,
                        figure_accessory_details: values.accessoryDetails,
                    },
                    selectedFile?.file
                )
                // .then((success) => {
                //     if (success) {
                //         router.push('dashboard');
                //     }
                // });
                break
            case 'ba20142015':
                addFigureBA20142015(
                    {
                        figure_number: values.number,
                        figure_name: values.name,
                        figure_version: values.version,
                        figure_date_stamp: values.dateStamp,
                        figure_release_date: values.releaseDate,
                        figure_joint_count: values.jointCount,
                        figure_accessory_count: values.accessoryCount,
                        figure_accessory_details: values.accessoryDetails,
                    },
                    selectedFile?.file
                )
                // .then((success) => {
                //     if (success) {
                //         router.push('dashboard');
                //     }
                // });
                break
            case 'ba20152017':
                addFigureBA20152017(
                    {
                        figure_number: values.number,
                        figure_name: values.name,
                        figure_version: values.version,
                        figure_date_stamp: values.dateStamp,
                        figure_release_date: values.releaseDate,
                        figure_joint_count: values.jointCount,
                        figure_accessory_count: values.accessoryCount,
                        figure_accessory_details: values.accessoryDetails,
                    },
                    selectedFile?.file
                )
                // .then((success) => {
                //     if (success) {
                //         router.push('dashboard');
                //     }
                // });
                break
            case 'ex20142015':
                addFigureEX20142015(
                    {
                        figure_number: values.number,
                        figure_name: values.name,
                        figure_version: values.version,
                        figure_date_stamp: values.dateStamp,
                        figure_release_date: values.releaseDate,
                        figure_joint_count: values.jointCount,
                        figure_accessory_count: values.accessoryCount,
                        figure_accessory_details: values.accessoryDetails,
                    },
                    selectedFile?.file
                )
                // .then((success) => {
                //     if (success) {
                //         router.push('dashboard');
                //     }
                // });
                break
            case 'mu20152017':
                addFigureMU20152017(
                    {
                        figure_number: values.number,
                        figure_name: values.name,
                        figure_version: values.version,
                        figure_date_stamp: values.dateStamp,
                        figure_release_date: values.releaseDate,
                        figure_joint_count: values.jointCount,
                        figure_accessory_count: values.accessoryCount,
                        figure_accessory_details: values.accessoryDetails,
                    },
                    selectedFile?.file
                )
                // .then((success) => {
                //     if (success) {
                //         router.push('dashboard');
                //     }
                // });
                break
            default:
                break
        }
        formik.resetForm()
        setSelectedFile(null)
    }

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
    })

    const validationSchema = Yup.object({
        number: Yup.string()
            .required('Number is required')
            .matches(/^\d+$/, 'Number must be a valid number'),

        name: Yup.string().required('Name is required'),

        version: Yup.string().required('Version is required'),

        dateStamp: Yup.string().required('Date stamp is required'),

        releaseDate: Yup.string().required('Release date is required'),

        jointCount: Yup.string()
            .required('Joint count is required')
            .matches(/^\d+$/, 'Joint count must be a number'),

        accessoryCount: Yup.string()
            .required('Accessory count is required')
            .matches(/^\d+$/, 'Accessory count must be a number'),

        accessoryDetails: Yup.string().required(
            'Accessory details are required'
        ),
    })

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange }) => (
                    <div className="flex flex-col items-center justify-center py-10 px-20">
                        <Form className="w-full flex items-center justify-between">
                            <div className="w-[70%] flex flex-col">
                                <TextInput
                                    labelText="Figure number:"
                                    placeholderText="Enter figure number"
                                    id="number"
                                    name="number"
                                    variant="number"
                                    value={values.number}
                                    onChangeInput={handleChange}
                                    errorMessage={
                                        touched.number && errors.number
                                            ? errors.number
                                            : undefined
                                    }
                                />
                                <TextInput
                                    labelText="Figure Name:"
                                    placeholderText="Enter figure name"
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onChangeInput={handleChange}
                                    errorMessage={
                                        touched.name && errors.name
                                            ? errors.name
                                            : undefined
                                    }
                                />
                                <TextInput
                                    labelText="Figure Version:"
                                    placeholderText="Enter figure version"
                                    id="version"
                                    name="version"
                                    value={values.version}
                                    onChangeInput={handleChange}
                                    errorMessage={
                                        touched.version && errors.version
                                            ? errors.version
                                            : undefined
                                    }
                                />
                                <TextInput
                                    labelText="Figure Date Stamp:"
                                    placeholderText="Enter figure date stamp"
                                    id="dateStamp"
                                    name="dateStamp"
                                    value={values.dateStamp}
                                    onChangeInput={handleChange}
                                    errorMessage={
                                        touched.dateStamp && errors.dateStamp
                                            ? errors.dateStamp
                                            : undefined
                                    }
                                />
                                <TextInput
                                    labelText="Figure Release Date:"
                                    placeholderText="Enter figure release date"
                                    id="releaseDate"
                                    name="releaseDate"
                                    value={values.releaseDate}
                                    onChangeInput={handleChange}
                                    errorMessage={
                                        touched.releaseDate &&
                                        errors.releaseDate
                                            ? errors.releaseDate
                                            : undefined
                                    }
                                />
                                <TextInput
                                    labelText="Figure Joint Count:"
                                    placeholderText="Enter figure joint count"
                                    id="jointCount"
                                    name="jointCount"
                                    variant="number"
                                    value={values.jointCount}
                                    onChangeInput={handleChange}
                                    errorMessage={
                                        touched.jointCount && errors.jointCount
                                            ? errors.jointCount
                                            : undefined
                                    }
                                />
                                <TextInput
                                    labelText="Figure Accessory Count:"
                                    placeholderText="Enter figure accessory count"
                                    id="accessoryCount"
                                    name="accessoryCount"
                                    variant="number"
                                    value={values.accessoryCount}
                                    onChangeInput={handleChange}
                                    errorMessage={
                                        touched.accessoryCount &&
                                        errors.accessoryCount
                                            ? errors.accessoryCount
                                            : undefined
                                    }
                                />
                                <TextInput
                                    labelText="Figure Accessory Details:"
                                    placeholderText="Enter figure accessory details"
                                    id="accessoryDetails"
                                    name="accessoryDetails"
                                    value={values.accessoryDetails}
                                    onChangeInput={handleChange}
                                    errorMessage={
                                        touched.accessoryDetails &&
                                        errors.accessoryDetails
                                            ? errors.accessoryDetails
                                            : undefined
                                    }
                                />
                            </div>

                            <div className="w-[30%] flex flex-col items-center justify-between">
                                {selectedFile ? (
                                    <>
                                        <Image
                                            src={imageBlob}
                                            alt="selected-file"
                                            width={100}
                                            height={100}
                                            quality={100}
                                            className="w-[500px] h-[680px] object-cover rounded-md mb-[20px]"
                                        />
                                        <div
                                            className="px-[45px] py-[15px] rounded-md bg-secondary1 cursor-pointer mb-[20px]"
                                            onClick={() =>
                                                inputRef.current?.click()
                                            }
                                        >
                                            <input
                                                type="file"
                                                onChange={handleFileSelect}
                                                onClick={handleFileClick}
                                                accept="image/*"
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
                                    <div
                                        className="px-[45px] py-[15px] rounded-md bg-secondary1 cursor mb-[20px]"
                                        onClick={() =>
                                            inputRef.current?.click()
                                        }
                                    >
                                        <input
                                            type="file"
                                            onChange={handleFileSelect}
                                            onClick={handleFileClick}
                                            accept="image/*"
                                            ref={inputRef}
                                            hidden
                                        />
                                        <div className="flex items-center">
                                            <div className="text-[16px] text-primary text-center font-bold">
                                                Upload image
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <button
                                    className="px-[45px] py-[15px] inline-block rounded-full bg-secondary1"
                                    type="submit"
                                >
                                    <div className="flex items-center">
                                        <div className="text-[16px] text-primary text-center font-bold">
                                            Submit
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
            <Loader />
        </>
    )
}

export default AddForm
