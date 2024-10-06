'use client';
import { Layout } from 'antd';

const AdminFooter = () => {
  const { Footer } = Layout;

  return (
    <>
      <Footer style={{ textAlign: 'center' }}>
        Glotery ©{new Date().getFullYear()} Created by @Glotery
      </Footer>
    </>
  );
};

export default AdminFooter;
