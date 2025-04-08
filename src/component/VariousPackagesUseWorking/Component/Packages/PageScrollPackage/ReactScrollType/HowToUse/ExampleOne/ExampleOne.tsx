import { useEffect } from 'react';
import { Link, Element, Events, scrollSpy, animateScroll } from 'react-scroll';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <WithSimpleImplement />
      <WithInsideElement />
      <PropsInLink />
      <ScrollToTopBottom />
      {/* <WithOtherOptions /> */}
    </div>
  )
}

export const WithSimpleImplement = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With Simple Implement</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <div style={{ overflowY: 'scroll', height: '200px' }}>
          <Link to="section1" smooth={true} duration={500}>Section 1</Link>
          <Link to="section2" smooth={true} duration={500}>Section 2</Link>
          <Element name="section1">
            <section style={{ height: '100vh', backgroundColor: 'lightblue' }}>
              <h1>Section 1</h1>
              <p>This is the content of section 1</p>
            </section>
          </Element>
          <Element name="section2">
            <section style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
              <h1>Section 2</h1>
              <p>This is the content of section 2</p>
            </section>
          </Element>
        </div>
      </div>
    </div>
  );
}

export const WithInsideElement = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With Inside Element</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Link to="section1" smooth={true} duration={500} containerId="containerElement">Section 1</Link>
        <Link to="section2" smooth={true} duration={500} containerId="containerElement">Section 2</Link>
        <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height: '200px',
          overflowY: 'scroll',
        }}>
          <Element name="section1">
            <section style={{ height: '100vh', backgroundColor: 'lightblue' }}>
              <h1>Section 1</h1>
              <p>This is the content of section 1</p>
            </section>
          </Element>
          <Element name="section2">
            <section style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
              <h1>Section 2</h1>
              <p>This is the content of section 2</p>
            </section>
          </Element>
        </Element>
      </div>
    </div>
  );
}

export const PropsInLink = () => {
  const handleSetActive = () => {
    console.log('handleSetActive');
  }
  const handleSetInactive = () => {
    console.log('handleSetInactive');
  }
  return (
    <>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_top">
          <span>Props In Link delay</span>
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <Link
            to="section1"
            smooth={true}
            duration={500}
            containerId="propsInLink1"

            spy={true}
            hashSpy={true}
            offset={50}
            delay={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >Section 1</Link>
          <Element name="test7" className="element" id="propsInLink1" style={{
            position: 'relative',
            height: '200px',
            overflowY: 'scroll',
          }}>
            <Element name="section1">
              <section style={{ height: '100vh', backgroundColor: 'lightblue' }}>
                <h1>Section 1</h1>
                <p>This is the content of section 1</p>
              </section>
            </Element>
          </Element>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_item'>
        <div className="vpu_ocoplmimotceici_top">
          <span>Props In Link</span>
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <Link
            to="section1"
            smooth={true}
            duration={500}
            containerId="propsInLink2"


            spy={true}
            hashSpy={true}
            offset={50}
            isDynamic={true}
            onSetActive={handleSetActive}
            onSetInactive={handleSetInactive}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >Section 1</Link>
          <Element name="test7" className="element" id="propsInLink2" style={{
            position: 'relative',
            height: '200px',
            overflowY: 'scroll',
          }}>
            <Element name="section1">
              <section style={{ height: '100vh', backgroundColor: 'lightblue' }}>
                <h1>Section 1</h1>
                <p>This is the content of section 1</p>
              </section>
            </Element>
          </Element>
        </div>
      </div>
    </>
  );
}

export const ScrollToTopBottom = () => {
  const options = {
    // Your options here, for example:
    duration: 500,
    smooth: true,
    containerId: 'scrollToTopBottom',
  };
  const scrollToTop = () => {
    animateScroll.scrollToTop(options);
  };
  const scrollToBottom = () => {
    animateScroll.scrollToBottom(options);
  };
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin (to)->', to);
      console.log('begin (element)->', element);
    });
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end (to)->', to);
      console.log('end (element)->', element);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Scroll To Top & Bottom</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Element
          name="test7"
          className="element"
          id="scrollToTopBottom"
          style={{
            position: 'relative',
            height: '200px',
            overflowY: 'scroll',
          }}>
          <Element name="firstInsideContainer" style={{ height: '300px', backgroundColor: 'lime' }}>first element inside container</Element>
          <Element name="secondInsideContainer" style={{ height: '300px', backgroundColor: 'pink' }}>second element inside container</Element>
        </Element>
        <a onClick={scrollToTop}>To the top!</a>
        <a onClick={scrollToBottom}>To the bottom!</a>
      </div>
    </div>
  );
}

export const WithOtherOptions = () => {
  useEffect(() => {

    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const scrollToBottom = () => {
    animateScroll.scrollToBottom();
  };

  const scrollTo = () => {
    animateScroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    animateScroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to: string): void => {
    console.log(to);
  };
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>With Inside Element</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        {/* Link component to scroll to "test1" element with specified properties */}
        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
        >
          Test 1
        </Link>

        {/* Other Link and Button components for navigation, each with their unique properties and targets */}
        {/* ... */}

        {/* Element components that act as scroll targets */}
        <Element name="test1" className="element">
          test 1
        </Element>
        <Element name="test2" className="element">
          test 2
        </Element>
        <div id="anchor" className="element">
          test 6 (anchor)
        </div>

        {/* Links to elements inside a specific container */}
        <Link to="firstInsideContainer" containerId="containerElement">
          Go to first element inside container
        </Link>
        <Link to="secondInsideContainer" containerId="containerElement">
          Go to second element inside container
        </Link>

        {/* Container with elements inside */}
        <div className="element" id="containerElement">
          <Element name="firstInsideContainer">
            first element inside container
          </Element>
          <Element name="secondInsideContainer">
            second element inside container
          </Element>
        </div>

        {/* Anchors to trigger scroll actions */}
        <a onClick={scrollToTop}>To the top!</a>
        <br />
        <a onClick={scrollToBottom}>To the bottom!</a>
        <br />
        <a onClick={scrollTo}>Scroll to 100px from the top</a>
        <br />
        <a onClick={scrollMore}>Scroll 100px more from the current position!</a>
      </div>
    </div>
  );
}