import React, { useRef, useState, useEffect } from 'react';
import StarShape from './StarShape';
import {
    Spade, ArrowBigUp, ArrowBigDown, Club, Circle, Square, Triangle, Heart, TriangleDashed, Box, Squircle, Cross, Cylinder, Diamond, Hexagon, Octagon, Pentagon, Radius, Pyramid, Cuboid, TriangleRight, Shield, Cone, RectangleHorizontal, RectangleVertical, OctagonAlert
} from 'lucide-react';

const iconClass = "hover:text-gray-600 cursor-pointer flex-shrink-0";

const Shapes = () => {

    return (
        <div className='mt-1 border-1 w-35 mx-2 flex h-15'>
            <div
                className="w-30 flex flex-wrap gap-1 justify-center overflow-y-scroll max-h-[6vh] py-1"
            >
                <Circle size={18} className={iconClass} />
                <Square size={18} className={iconClass} />
                <Triangle size={18} className={iconClass} />
                <Heart size={18} className={iconClass} />
                <TriangleDashed size={18} className={iconClass} />
                <Box size={18} className={iconClass} />
                <Squircle size={18} className={iconClass} />
                <Spade size={18} className={iconClass} />
                <Club size={18} className={iconClass} />
                <Cross size={18} className={iconClass} />
                <Cylinder size={18} className={iconClass} />
                <Spade size={18} className={iconClass} />
                <Diamond size={18} className={iconClass} />
                <Hexagon size={18} className={iconClass} />
                <Octagon size={18} className={iconClass} />
                <Pentagon size={18} className={iconClass} />
                <Radius size={18} className={iconClass} />
                <Pyramid size={18} className={iconClass} />
                <Cuboid size={18} className={iconClass} />
                <TriangleRight size={18} className={iconClass} />
                <Shield size={18} className={iconClass} />
                <Cone size={18} className={iconClass} />
                <RectangleHorizontal size={18} className={iconClass} />
                <RectangleVertical size={18} className={iconClass} />
                <StarShape />
                <OctagonAlert size={18} className={iconClass} />
            </div>
            <div className="flex flex-col items-center justify-between">
               <ArrowBigUp size={15} fill="black" />
               <div className='border-2 rounded h-6' />
               <ArrowBigDown size={15} fill="black" />
            </div>
        </div>
    );
};

export default Shapes;