'use client'
import React, {useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";

const  AppNavBar = (props) => {

    let [searchKey, SetSearchKey]= useState('0')



    return (
        <div>
            <div className="py-2 bg-dark text-white container-fluid">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            {/*<h6><i className="bi bi-calendar2-check"></i> Today:<span> {new Date().getDay()}/{new Date().getMonth()}/{new Date().getFullYear()} </span></h6>*/}
                            <h6><i className="bi bi-calendar2-check"></i> Today:<span> {
                                new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})

                            } </span></h6>
                        </div>
                        <div className="col-md-4">
                                <span className="float-end">
                                <a target="_blank" className="text-white" href={props.data['socials'][0]['facebook']}><i className="mx-2 bi bi-facebook"></i></a>
                                <a target="_blank" className="text-white" href={props.data['socials'][0]['youtube']}><i className="mx-2 bi bi-youtube"></i></a>
                                <a target="_blank" className="text-white" href={props.data['socials'][0]['twitter']}><i className="mx-2 bi bi bi-twitter"></i></a>
                                <a target="_blank" className="text-white" href={props.data['socials'][0]['linkedin']}><i className="mx-2 bi bi-linkedin"></i></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>



    <Navbar expand="lg" className="bg-white sticky-top shadow-sm">
        <div className="container">
            <div className="navbar-brand">
                <img className="nav-logo" src={"/images/logo.svg"} alt="img"/>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto ms-3 my-2 my-lg-0"  navbarScroll>
                    <Link className="nav-link f-13" href="/">Home</Link>
                     {
                         props.data['categories'].map((item,i)=>{
                             return <Link key={i} className="nav-link f-13" href={"/category?id="+item['id']} >{item['name']}</Link>

                         })
                     }
                </Nav>
                <div className="d-flex ms-3">
                    <div className="input-group">
                        <input onChange={((e)=>{SetSearchKey(e.target.value)})} type="text" className="form-control" placeholder="Search..."/>
                        <Link href={`/search?keyword=${searchKey}`} className="btn btn-danger" type="button"><i
                            className="bi bi-search"></i></Link>
                    </div>
                </div>
                <>
                    <Link href="/user/login" className="btn ms-3 btn-outline-danger">Login</Link>
                </>
            </Navbar.Collapse>
        </div>
    </Navbar>


        </div>
    );
};

export default AppNavBar;