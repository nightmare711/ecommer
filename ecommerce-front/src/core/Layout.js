import React from "react";
import Menu from "./Menu";
import "../styles.css";
import './Layout.css'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div className='Layout'>
        <Menu />
        <div className='slideshow-container mt-30'>
			<Slide>
				<div className='each-slide'>
					<div className='image img-1'></div>
				</div>
				<div className='each-slide'>
					<div className='image img-2'></div>
				</div>
				<div className='each-slide'>
					<div className='image img-3'></div>
				</div>
			</Slide>
		</div>
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
