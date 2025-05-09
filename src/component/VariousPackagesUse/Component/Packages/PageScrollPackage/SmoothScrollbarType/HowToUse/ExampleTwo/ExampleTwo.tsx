import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { getCommonData } from "../../../../../../../../database/common-database";

export const ExampleTwo = () => {
  const data = getCommonData({ type: "usefulPackage", for: "smoothScroll" });
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <OverScroll content={data} />
      <DestroyScroll content={data} />
      {/* <BasicImplement content={data} /> */}
    </div>
  );
};

export const OverScroll = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-10");
  const options: any = {
    damping: 0.07,
    plugins: {
      overscroll: {
        enable: true,
        effect: "bounce",
        // effect: 'glow',
        damping: 0.15,
        maxOverscroll: 150,
        glowColor: "red", // id effect is glow that color will works
      },
    },
  };
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.use(OverscrollPlugin);
      Scrollbar.init(scrollbarElement as HTMLElement, options);
    }
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Over Scroll</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-10" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const DestroyScroll = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-11");
  const options: any = {
    damping: 0.07,
    plugins: {
      overscroll: {
        enable: true,
        effect: "glow",
        damping: 0.15,
        maxOverscroll: 150,
        glowColor: "red",
      },
    },
  };
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.use(OverscrollPlugin);
      Scrollbar.init(scrollbarElement as HTMLElement, options);
    }
    return () => {
      if (Scrollbar) Scrollbar.destroy(scrollbarElement as HTMLElement);
    };
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Destroy Scrolll</span>
        <span>
          <label>note:</label> After exit from component you must destroy so
          that no conflict happen.
        </span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-11" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const BasicImplement = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-11");
  const options: any = {
    damping: 0.07,
    plugins: {
      overscroll: {
        enable: true,
        effect: "bounce",
        damping: 0.15,
        maxOverscroll: 150,
      },
    },
  };
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.use(OverscrollPlugin);
      const scrollbar = Scrollbar.init(
        scrollbarElement as HTMLElement,
        options
      );
      scrollbar.size = {
        container: {
          width: 10,
          height: 10,
        },
        content: {
          width: 10,
          height: 10,
        },
      };
      scrollbar.update();

      console.log("Scrollbar->", Scrollbar);
      console.log("get->", Scrollbar.get(scrollbarElement as HTMLElement));
      console.log("has->", Scrollbar.has(scrollbarElement as HTMLElement));
      console.log("getSize->", scrollbar.getSize());
      // console.log('attachStyle->', Scrollbar.attachStyle());
      // console.log('detachStyle->', Scrollbar.detachStyle());
      // console.log('destroy->', Scrollbar.destroy(scrollbarElement as HTMLElement));
    }
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Basic implementation</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-11" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
