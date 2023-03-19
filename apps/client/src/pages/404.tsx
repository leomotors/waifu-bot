import { NextPage } from "next";
import Image from "next/image";

const NotFoundPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="page-title">404 Not Found</h1>
      <Image
        alt="Cocoa Crying"
        height="413"
        src="https://c.tenor.com/9lt2cONQObcAAAAC/cocoa-hato-cocoa.gif"
        width="498"
      />
    </main>
  );
};

export default NotFoundPage;
