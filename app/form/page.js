"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            //getting the response from the api route '/api/codes' and handle the response
            const response = await fetch('/api/codes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                // handle successful response
                console.log('Success:', await response.json())
            } else {
                // handle errors
                console.error('Error:', response.statusText)
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center '>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
                <h1 className="text-2xl font-bold mb-6 text-center">Submit Code</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4">
                        <input
                            placeholder="Link"
                            {...register("link")}
                            className='rounded-sm p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        <input
                            placeholder="Date (YYYY-MM-DD)"
                            {...register("date", { required: true })}
                            className='rounded-sm p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        <input
                            placeholder="Difficulty"
                            {...register("difficulty", { required: true })}
                            className='rounded-sm p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        <input
                            placeholder="Topics"
                            {...register("topics", { required: true })}
                            className='rounded-sm p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />

                        {errors.date && <span className="text-red-500 text-sm">Date is required</span>}
                        {errors.difficulty && <span className="text-red-500 text-sm">Difficulty is required</span>}
                        {errors.topics && <span className="text-red-500 text-sm">Topics are required</span>}

                        <input
                            type="submit"
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-all duration-200'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page
