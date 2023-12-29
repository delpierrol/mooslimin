'use client'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function PageBreadcrumb(datas) {
    const totalBreadcrumb = (datas.datas.length - 1); 
    return (
        <>
            <Breadcrumb className="py-4">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                {
                    datas.datas.map((item, index) => (
                        <Breadcrumb.Item key={index} {...(totalBreadcrumb === index && { active: true })} href={`/${item.slug}`}>{item.title}</Breadcrumb.Item>
                    ))
                }
            </Breadcrumb>
        </>
    )
}
