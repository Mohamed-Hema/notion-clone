const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
