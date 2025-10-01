import React from 'react';
import {TableCell, TableRow} from "@/components/ui/table.jsx";

// Loading Spinner Component
export const LoadingSpinner = ({ size = 'md', className = '' }) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12'
    };

    return (
        <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-[var(--primary)] ${sizeClasses[size]} ${className}`}></div>
    );
};

// Loading Skeleton Component
export const LoadingSkeleton = ({ className = '', lines = 1 }) => {
    return (
        <div className={`animate-pulse ${className}`}>
            {Array.from({ length: lines }).map((_, index) => (
                <div key={index} className="h-4 bg-gray-200 rounded mb-2"></div>
            ))}
        </div>
    );
};

// Card Loading Component
export const CardLoading = ({ className = '' }) => {
    return (
        <div className={`card border-1 flex flex-col border-[var(--border-light)] rounded-[16px] ${className}`}>
            <div className="card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)]">
                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="p-4 sm:p-4 md:px-5 md:py-3">
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
            </div>
        </div>
    );
};

// Chart Loading Component
export const ChartLoading = ({ className = '' }) => {
    return (
        <div className={`card border-1 flex flex-col border-[var(--border-light)] rounded-[16px] ${className}`}>
            <div className="card-header p-4 sm:p-4 md:px-5 md:py-4 border-b-1 border-[var(--border-light)]">
                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="p-4 sm:p-4 md:px-5 md:py-3 h-[380px] flex items-center justify-center">
                <div className="flex flex-col items-center space-y-4">
                    <LoadingSpinner size="lg" />
                    <div className="text-sm text-gray-500">Loading chart data...</div>
                </div>
            </div>
        </div>
    );
};

// Profile Image Loading Component
export const ProfileImageLoading = ({ className = '' }) => {
    return (
        <div className={`relative profile-div overflow-hidden rounded-3xl bg-gray-200 animate-pulse ${className}`}>
            <div className="w-full h-full bg-gray-300"></div>
            <div className="absolute bottom-1 p-4 z-10">
                <div className="h-6 bg-gray-300 rounded mb-2 w-32"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
            </div>
        </div>
    );
};

// Table Loading Component
export const TableLoading = ({ rows = 5, columns = 3, className = '' }) => {
    return (
        <div className={`border-1 border-[var(--border-light)] rounded-[16px] overflow-hidden ${className}`}>
            <div className="p-4 border-b border-[var(--border-light)]">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-48"></div>
            </div>
            <div className="p-4 space-y-3">
                {Array.from({ length: rows }).map((_, index) => (
                    <div key={index} className="flex space-x-4">
                        {Array.from({ length: columns }).map((_, colIndex) => (
                            <div 
                                key={colIndex} 
                                className={`h-4 bg-gray-200 rounded animate-pulse ${
                                    colIndex === 0 ? 'flex-1' : 
                                    colIndex === 1 ? 'w-32' : 
                                    colIndex === 2 ? 'w-24' :
                                    colIndex === 3 ? 'w-20' :
                                    colIndex === 4 ? 'w-28' :
                                    colIndex === 5 ? 'w-16' :
                                    'w-20'
                                }`}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Table Row Loading Component for use within TableBody
export const TableRowLoading = ({ rows = 5, columns = 3 }) => {
    
    return (
        <>
            {Array.from({ length: rows }).map((_, index) => (
                <TableRow key={index} className="bg-white border-b border-gray-200">
                    {Array.from({ length: columns }).map((_, colIndex) => (
                        <TableCell 
                            key={colIndex} 
                            className="p-3 border border-[var(--border-light)]"
                        >
                            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    );
};

export default LoadingSpinner;
