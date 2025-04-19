import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { getCommonData } from "../../../../../../../../database/common-database";

export const ExampleOne = () => {
  const data = getCommonData({ type: "usefulPackage", for: "smoothScroll" });
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <BasicImplement content={data} />
      <WithDampingOption content={data} />
      <WithThumbMinSizeOption content={data} />
      <WithRenderByPixelsOption content={data} />
      <WithAlwaysShowTracksOption content={data} />
      <WithContinuousScrollingOption content={data} />
      <WithDelegateToOption content={data} />
      <WithPluginsOption content={data} />
    </div>
  );
};

export const BasicImplement = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-1");
  const options = {};
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.init(scrollbarElement as HTMLElement, options);
    }
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Basic implementation</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-1" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const WithDampingOption = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-2");
  const options = {
    damping: 0.1,
  };
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.init(scrollbarElement as HTMLElement, options);
    }
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With option damping</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-2" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const WithThumbMinSizeOption = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-3");
  const options = {
    thumbMinSize: 50,
  };
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.init(scrollbarElement as HTMLElement, options);
    }
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With option thumb min size</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-3" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const WithRenderByPixelsOption = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-4");
  const options = {
    renderByPixels: true,
  };
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.init(scrollbarElement as HTMLElement, options);
    }
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With option render by pixels</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-4" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const WithAlwaysShowTracksOption = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-5");
  const options = {
    alwaysShowTracks: true,
  };
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.init(scrollbarElement as HTMLElement, options);
    }
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With option always show tracks</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-5" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const WithContinuousScrollingOption = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-6");
  const options = {
    continuousScrolling: true,
  };
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.init(scrollbarElement as HTMLElement, options);
    }
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With option continuous scrolling</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-6" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const WithDelegateToOption = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-7");
  const options = {
    renderByPixels: true,
  };
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.init(scrollbarElement as HTMLElement, options);
    }
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With option render by pixels</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-7" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const WithPluginsOption = ({ content }: any) => {
  const scrollbarElement = document.querySelector("#my-scrollbar-8");
  const options = {
    renderByPixels: true,
  };
  useEffect(() => {
    if (scrollbarElement) {
      Scrollbar.init(scrollbarElement as HTMLElement, options);
    }
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With option render by pixels</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div id="my-scrollbar-8" style={{ height: "200px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
