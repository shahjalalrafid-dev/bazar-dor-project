import React from 'react'

const loading = () => {
    return (
        <section>
            <div className="container mx-auto px-4 py-4 animate-pulse">
                {/* Header skeleton */}
                <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="space-y-3">
                        <div className="h-7 w-28 rounded-md bg-gray-200" />
                        <div className="h-4 w-48 rounded-md bg-gray-200" />
                    </div>

                    {/* Sort dropdown skeleton */}
                    <div className="h-10 w-36 rounded-lg bg-gray-200" />
                </div>

                {/* Product cards skeleton */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-gray-200 bg-gray-100 p-4"
                        >
                            {/* Product icon and name */}
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200" />

                                <div className="flex-1 space-y-2">
                                    <div className="h-5 w-3/4 rounded-md bg-gray-200" />
                                    <div className="h-4 w-1/3 rounded-md bg-gray-200" />
                                </div>
                            </div>

                            {/* Price label */}
                            <div className="mt-5 h-4 w-20 rounded-md bg-gray-200" />

                            {/* Price and percentage */}
                            <div className="mt-3 flex items-center justify-between">
                                <div className="h-6 w-24 rounded-md bg-gray-200" />

                                <div className="h-5 w-14 rounded-md bg-gray-200" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default loading