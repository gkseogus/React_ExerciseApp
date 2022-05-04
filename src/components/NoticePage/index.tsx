import React, { useState } from 'react';
import Footer from '../Footer';
import styled from 'styled-components';
import { Navbar, Container, Offcanvas, Nav, Form, FormControl, Button, Breadcrumb } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import { noticeData } from '../../components/NoticePage/noticeData';
import { useNavigate } from 'react-router-dom';

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

const BreadCrumbsContstain = styled.div`
  @media (min-width: 760px) {
    padding: 5px;
    position: absolute;
    left: 1350px;
  }
  padding: 5px;
  position: absolute;
  top: 60px;
`

const BreadcrumbFont = styled.h6`
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  &:hover{  
    background-color : white;
    color : white;
  }
`

const NoticePage = () => {
    const { Panel } = Collapse;
    
    const navigate = useNavigate();

    const [ searchKeyWord, setSearchKeyWord ] = useState('');
    const searchToData = () => {
        
    };
    
    return (
        <div>
            <BreadCrumbsContstain>
                <Breadcrumb>
                    <Breadcrumb.Item active onClick={() => {navigate('/')}}>
                    <BreadcrumbFont>
                        Home
                    </BreadcrumbFont>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Notice</Breadcrumb.Item>
                </Breadcrumb>
            </BreadCrumbsContstain>
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
                        검색
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3"/>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="내용을 입력하세요."
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setSearchKeyWord(e.target.value)}
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