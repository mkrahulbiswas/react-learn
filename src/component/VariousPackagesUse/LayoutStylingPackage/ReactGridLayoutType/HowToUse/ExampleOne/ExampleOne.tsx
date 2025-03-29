import { useRef } from "react";
import { WidthProvider } from "react-grid-layout";
import GridLayout, { DragOverEvent, Layout, Responsive } from "react-grid-layout";

export const ExampleOne = () => {
  return (
    <>
      <LayoutIsAnArray />
      <LayoutIsAnInDiv />
      <ResponsiveUsage />
      <GridProps />
      <GridCallbackProps />
      <GridTransformProps />
      <GridDragResizeProps />
      <OtherProps />
    </>
  )
}

export const LayoutIsAnArray = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 2, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Mention layout as in a object and than pass it</span>
        </div>
        <div className="exampleCommonContent">
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
          >
            <div key="a" style={{ border: '2px solid green' }}>a</div>
            <div key="b" style={{ border: '2px solid green' }}>b</div>
            <div key="c" style={{ border: '2px solid green' }}>c</div>
          </GridLayout>
        </div>
      </div>
    </>
  )
}

export const LayoutIsAnInDiv = () => {
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Mention layout inside the each div individually</span>
        </div>
        <div className="exampleCommonContent">
          <GridLayout
            className="layout"
            cols={12}
            rowHeight={30}
            width={1200}
          >
            <div style={{ border: '2px solid green' }} key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>a</div>
            <div style={{ border: '2px solid green' }} key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>b</div>
            <div style={{ border: '2px solid green' }} key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>c</div>
          </GridLayout>
        </div>
      </div>
    </>
  )
}

export const ResponsiveUsage = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const layout =
  {
    sm: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 0, y: 0, w: 1, h: 2 },
      { i: "c", x: 0, y: 0, w: 1, h: 2 }
    ],
    md: [
      { i: "a", x: 0, y: 0, w: 1, h: 3 },
      { i: "b", x: 1, y: 0, w: 2, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ],
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 4 },
      { i: "b", x: 1, y: 0, w: 2, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ],
    xs: [
      { i: "a", x: 0, y: 0, w: 1, h: 5 },
      { i: "b", x: 1, y: 0, w: 2, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ],
    xxs: [
      { i: "a", x: 0, y: 0, w: 1, h: 6 },
      { i: "b", x: 1, y: 0, w: 2, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ],
  }
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Responsive Usage</span>
        </div>
        <div className="exampleCommonContent">
          <ResponsiveGridLayout
            className="layout"
            layouts={layout}
            width={1200}
            rowHeight={30}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >
            <div key="a" style={{ border: '2px solid green' }}>A</div>
            <div key="b" style={{ border: '2px solid green' }}>B</div>
            <div key="c" style={{ border: '2px solid green' }}>C</div>
          </ResponsiveGridLayout>
        </div>
      </div>
    </>
  )
}

export const GridProps = () => {
  const ref = useRef()
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 2, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Mention layout as in a object and than pass it</span>
        </div>
        <div className="exampleCommonContent">
          <GridLayout

            className="layout"

            // Basic props

            // This allows setting the initial width on the server side.
            // This is required unless using the HOC <WidthProvider> or similar
            width={1200}

            // If true, the container height swells and contracts to fit contents
            autoSize={true}

            // Number of columns in this layout.
            cols={12}

            // A CSS selector for tags that will not be draggable.
            // For example: draggableCancel:'.MyNonDraggableAreaClassName'
            // If you forget the leading . it will not work.
            // .react-resizable-handle" is always prepended to this value.
            draggableCancel='s'

            // A CSS selector for tags that will act as the draggable handle.
            // For example: draggableHandle:'.MyDragHandleClassName'
            // If you forget the leading . it will not work.
            draggableHandle='b'

            // Compaction type (vertical / horizontal).
            compactType='vertical'

            // Layout is an array of objects with the format:
            // The index into the layout must match the key used on each item component.
            // If you choose to use custom keys, you can specify that key in the layout
            // array objects using the `i` prop.
            layout={layout}

            // Margin between items [x, y] in px.
            margin={[10, 10]}

            // Padding inside the container [x, y] in px
            // containerPadding={'margin'}
            containerPadding={[10, 10]}

            // Rows have a static height, but you can change this based on breakpoints
            // if you like.
            rowHeight={30}

            // Configuration of a dropping element. Dropping element is a "virtual" element
            // which appears when you drag over some element from outside.
            // It can be changed by passing specific parameters:
            //  i - id of an element
            //  w - width of an element
            //  h - height of an element
            droppingItem={{ i: "new", w: 2, h: 2 }}

            // Flags
            isDraggable={true}
            isResizable={true}
            isBounded={false}

            // Uses CSS3 translate() instead of position top/left.
            // This makes about 6x faster paint performance
            useCSSTransforms={true}

            // If parent DOM node of ResponsiveReactGridLayout or ReactGridLayout has "transform: scale(n)" css property,
            // we should set scale coefficient to avoid render artefacts while dragging.
            transformScale={1}

            // If true, grid can be placed one over the other.
            // If set, implies `preventCollision`.
            allowOverlap={false}

            // If true, grid items won't change position when being
            // dragged over. If `allowOverlap` is still false,
            // this simply won't allow one to drop on an existing object.
            preventCollision={false}

            // If true, droppable elements (with `draggable={true}` attribute)
            // can be dropped on the grid. It triggers "onDrop" callback
            // with position and event object as parameters.
            // It can be useful for dropping an element in a specific position
            //
            // NOTE: In case of using Firefox you should add
            // `onDragStart={e => e.dataTransfer.setData('text/plain', '')}` attribute
            // along with `draggable={true}` otherwise this feature will work incorrect.
            // onDragStart attribute is required for Firefox for a dragging initialization
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            isDroppable={false}

            // Defines which resize handles should be rendered.
            // Allows for any combination of:
            // 's' - South handle (bottom-center)
            // 'w' - West handle (left-center)
            // 'e' - East handle (right-center)
            // 'n' - North handle (top-center)
            // 'sw' - Southwest handle (bottom-left)
            // 'nw' - Northwest handle (top-left)
            // 'se' - Southeast handle (bottom-right)
            // 'ne' - Northeast handle (top-right)
            // Note that changing this property dynamically does not work due to a restriction in react-resizable.
            resizeHandles={['se']}

            // Custom component for resize handles
            // See `handle` as used in https://github.com/react-grid-layout/react-resizable#resize-handle
            // Your component should have the class `.react-resizable-handle`, or you should add your custom
            // class to the `draggableCancel` prop.
            // resizeHandle?: ReactElement<any> | ((resizeHandleAxis: ResizeHandleAxis, ref: ReactRef<HTMLElement>) => ReactElement<any>),

            // Callbacks

            // Callback so you can save the layout.
            // Calls back with (currentLayout) after every drag or resize stop.
            onLayoutChange={(layout: Layout[]) => {
              console.log('layout->', layout);
            }}


            // All callbacks below have signature (layout, oldItem, newItem, placeholder, e, element).
            // 'start' and 'stop' callbacks pass `undefined` for 'placeholder'.
            // type ItemCallback= (layout: Layout, oldItem, newItem, placeholder, e: MouseEvent, element: HTMLElement) => void,
            // Calls when drag starts.
            onDragStart={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => { }}
            // Calls on each drag movement.
            onDrag={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => { }}
            // Calls when drag is complete.
            onDragStop={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => { }}
            // Calls when resize starts.
            onResizeStart={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => { }}
            // Calls when resize movement happens.
            onResize={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => { }}
            // Calls when resize is complete.
            onResizeStop={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => { }}

            // Dropover functionality
            // Calls when an element has been dropped into the grid from outside.
            onDrop={(layout: Layout[], item: Layout, e: Event) => { }}

            // Calls when an element is being dragged over the grid from outside as above.
            // This callback should return an object to dynamically change the droppingItem size
            // Return false to short-circuit the dragover
            onDropDragOver={(e: DragOverEvent) => { return { w: 10, h: 10 }; }}

          // Ref for getting a reference for the grid's wrapping div.
          // You can use this instead of a regular ref and the deprecated `ReactDOM.findDOMNode()`` function.
          // Note that this type is React.Ref<HTMLDivElement> in TypeScript, Flow has a bug here
          // https://github.com/facebook/flow/issues/8671#issuecomment-862634865
          // innerRef={ref}
          >
            <div key="a" style={{ border: '2px solid green' }}>a</div>
            <div key="b" style={{ border: '2px solid green' }}>b</div>
            <div key="c" style={{ border: '2px solid green' }}>c</div>
          </GridLayout>
        </div>
      </div >
    </>
  )
}

export const GridCallbackProps = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 1, h: 2 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 }
  ];
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Grid Callback Props</span>
        </div>
        <div className="exampleCommonContent">
          <GridLayout
            className="layout"
            width={1200}
            rowHeight={30}
            cols={12}
            layout={layout}
            isResizable={true}
            resizeHandles={['se']}


            onLayoutChange={(layout: Layout[]) => {
              console.log('onLayoutChange------------------------------------------------------------------------------------( START )---->');
              console.log('layout->', layout);
              console.log('onLayoutChange------------------------------------------------------------------------------------( END )---->');
            }}
            onDragStart={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => {
              console.log('onDragStart------------------------------------------------------------------------------------( START )---->');
              console.log('layout->', layout);
              console.log('oldItem->', oldItem);
              console.log('newItem->', newItem);
              console.log('placeholder->', placeholder);
              console.log('e->', e);
              console.log('element->', element);
              console.log('onDragStart------------------------------------------------------------------------------------( END )---->');
            }}
            onDrag={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => {
              console.log('onDrag------------------------------------------------------------------------------------( START )---->');
              console.log('layout->', layout);
              console.log('oldItem->', oldItem);
              console.log('newItem->', newItem);
              console.log('placeholder->', placeholder);
              console.log('e->', e);
              console.log('element->', element);
              console.log('onDrag------------------------------------------------------------------------------------( END )---->');
            }}
            onDragStop={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => {
              console.log('onDragStop------------------------------------------------------------------------------------( START )---->');
              console.log('layout->', layout);
              console.log('oldItem->', oldItem);
              console.log('newItem->', newItem);
              console.log('placeholder->', placeholder);
              console.log('e->', e);
              console.log('element->', element);
              console.log('onDragStop------------------------------------------------------------------------------------( END )---->');
            }}
            onResizeStart={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => {
              console.log('onResizeStart------------------------------------------------------------------------------------( START )---->');
              console.log('layout->', layout);
              console.log('oldItem->', oldItem);
              console.log('newItem->', newItem);
              console.log('placeholder->', placeholder);
              console.log('e->', e);
              console.log('element->', element);
              console.log('onResizeStart------------------------------------------------------------------------------------( END )---->');
            }}
            onResize={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => {
              console.log('onResize------------------------------------------------------------------------------------( START )---->');
              console.log('layout->', layout);
              console.log('oldItem->', oldItem);
              console.log('newItem->', newItem);
              console.log('placeholder->', placeholder);
              console.log('e->', e);
              console.log('element->', element);
              console.log('onResize------------------------------------------------------------------------------------( END )---->');
            }}
            onResizeStop={(layout: Layout[], oldItem: Layout, newItem: Layout, placeholder: Layout, e: MouseEvent, element: HTMLElement) => {
              console.log('onResizeStop------------------------------------------------------------------------------------( START )---->');
              console.log('layout->', layout);
              console.log('oldItem->', oldItem);
              console.log('newItem->', newItem);
              console.log('placeholder->', placeholder);
              console.log('e->', e);
              console.log('element->', element);
              console.log('onResizeStop------------------------------------------------------------------------------------( END )---->');
            }}
            onDrop={(layout: Layout[], item: Layout, e: Event) => {
              console.log('onDrop------------------------------------------------------------------------------------( START )---->');
              console.log('layout->', layout);
              console.log('item->', item);
              console.log('e->', e);
              console.log('onDrop------------------------------------------------------------------------------------( END )---->');
            }}
            onDropDragOver={(e: DragOverEvent) => {
              return { w: 10, h: 10 };
            }}
          >
            <div key="a" style={{ border: '2px solid green' }}>a</div>
            <div key="b" style={{ border: '2px solid green' }}>b</div>
            <div key="c" style={{ border: '2px solid green' }}>c</div>
          </GridLayout>
        </div>
      </div >
    </>
  )
}

export const GridTransformProps = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 1, h: 2 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 }
  ]
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Grid Transform Props</span>
        </div>
        <div className="exampleCommonContent">
          <GridLayout
            className="layout"
            width={1200}
            rowHeight={30}
            cols={12}
            layout={layout}
            useCSSTransforms={true}
            transformScale={2.5}
          >
            <div key="a" style={{ border: '2px solid green' }}>a</div>
            <div key="b" style={{ border: '2px solid green' }}>b</div>
            <div key="c" style={{ border: '2px solid green' }}>c</div>
          </GridLayout>
        </div>
      </div >
    </>
  )
}

export const GridDragResizeProps = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 1, h: 2 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 }
  ]
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Grid Drag Resize Props</span>
        </div>
        <div className="exampleCommonContent">
          <GridLayout
            className="layout"
            width={1200}
            rowHeight={30}
            cols={12}
            layout={layout}

            // isDraggable={true}
            isResizable={false}
            resizeHandles={['se']}
          // isDroppable={true}
          >
            <div key="a" style={{ border: '2px solid green' }}>a</div>
            <div key="b" style={{ border: '2px solid green' }}>b</div>
            <div key="c" style={{ border: '2px solid green' }}>c</div>
          </GridLayout>
        </div>
      </div >
    </>
  )
}

export const OtherProps = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 1, h: 2 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 }
  ];
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Other Props</span>
        </div>
        <div className="exampleCommonContent">
          <GridLayout
            className="layout"
            width={1200}
            rowHeight={30}
            cols={12}
            layout={layout}

            autoSize={true}
            // draggableCancel='s'
            // draggableHandle='b'
            compactType='vertical'
            margin={[10, 10]}
            containerPadding={[10, 10]}
            droppingItem={{ i: "new", w: 2, h: 2 }}
            isDraggable={true}
            isResizable={true}
            isBounded={false}
            useCSSTransforms={true}
            transformScale={1}
            allowOverlap={false}
            preventCollision={false}
            isDroppable={false}
            resizeHandles={['se']}
          >
            <div key="a" style={{ border: '2px solid green' }}>a</div>
            <div key="b" style={{ border: '2px solid green' }}>b</div>
            <div key="c" style={{ border: '2px solid green' }}>c</div>
          </GridLayout>
        </div>
      </div >
    </>
  )
}