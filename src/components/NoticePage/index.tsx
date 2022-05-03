import React, { useState } from 'react';
import Footer from '../Footer';
import styled from 'styled-components';
import { Navbar, Container, Offcanvas, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import { noticeData } from '../../components/NoticePage/noticeData';

const TitleFont = styled.h3`
    font-weight: bold;
    margin: 20px 50px 20px 200px;
`

const SubTitleFont = styled.h6`
    font-size: 20px;
    margin: 20px 50px 20px 200px;
`

const FooterDiv = styled.div`
  height: 0px;
  position : relative;
  transform : translateY(-100%);
`

const NoticePage = () => {
    
    const { Panel } = Collapse;
    
    const searchToData = () => {
        
    };
    
    return (
        <div>
            <Navbar  bg="light" expand={'md'} className="mb-3">
                <Container fluid>
                    <Navbar.Brand>
                        <TitleFont>-공지사항-</TitleFont>
                        <SubTitleFont>홈페이지 릴리즈 정보를 볼 수 있습니다.</SubTitleFont>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${'md'}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                        Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3"/>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" onClick={searchToData}>Search</Button>
                        </Form>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Collapse>
                {
                    noticeData.slice(0).reverse().map((data) => {
                        return(
                            <Panel header={data.title} key={data.key}>
                            <p>{data.text}</p>
                            </Panel>     
                        )  
                    })
                }
            </Collapse>
            <FooterDiv>
                <Footer/>
            </FooterDiv>
        </div>
    );
};

export default React.memo(NoticePage);