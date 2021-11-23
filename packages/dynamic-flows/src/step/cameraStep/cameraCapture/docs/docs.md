# Camera Capture

The component uses the vanilla JS MediaStream API for rendering the video, and canvas for drawing the snapshot and overlays.

### Overlays

Its possible to provide a couple assets which will be used to create an overlay on the video stream to provide help when uploading documents for example.

Assets 
- Overlay: The assets gives the size of the cutout from the black opaque background
- Outline: The asset is simply displayed within the overlay to provide further UX guidance

The way the overlay position is calculated as seen in the example is the following:
- **Red**: the red portion is basically the portion of the `<video>` element that contains the video stream
- **Purple**: the purple area is called the `usableScreenArea` and is the area available in which the overlay should fit into. Basically this is the same as the red with margins applied, and a hard margin applied from the bottom of the whole page/camera capure component (this is to make space fo the snapshot button and copy at the bottom)
- **Overlay itself**: the overlay is positioned in the middle of the purple area using all available space while maintaining the image's aspect ratio.

Its possible to enable debugging mode and displaying these different sections by toggling the `DEBUG_MODE` flag within the component

![img.png](src/step/cameraStep/cameraCapture/docs/img.png)