var documenterSearchIndex = {"docs": [

{
    "location": "#GLFW.Window-Tuple{}",
    "page": "Home",
    "title": "GLFW.Window",
    "category": "method",
    "text": "Function to create a pure GLFW OpenGL window\n\n\n\n\n\n"
},

{
    "location": "#GLFW.CreateWindowSurface",
    "page": "Home",
    "title": "GLFW.CreateWindowSurface",
    "category": "function",
    "text": "CreateWindowSurface(instance, window, allocator=C_NULL)\n\nCreate a Vulkan surface for the specified window.\n\n\n\n\n\n"
},

{
    "location": "#GLFW.GetInstanceProcAddress-Tuple{Any,Any}",
    "page": "Home",
    "title": "GLFW.GetInstanceProcAddress",
    "category": "method",
    "text": "GetInstanceProcAddress(instance, procname) -> funcptr\n\nReturn the address of the specified Vulkan core or extension function for the specified instance. funcptr can be used directly as the first argument of ccall: ccall(funcptr, ...).\n\n\n\n\n\n"
},

{
    "location": "#GLFW.GetPhysicalDevicePresentationSupport-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GLFW.GetPhysicalDevicePresentationSupport",
    "category": "method",
    "text": "GetPhysicalDevicePresentationSupport(instance, device, queuefamily)\n\nReturn whether the specified queue family of the specified physical device supports presentation to the platform GLFW was built for.\n\n\n\n\n\n"
},

{
    "location": "#GLFW.GetRequiredInstanceExtensions-Tuple{}",
    "page": "Home",
    "title": "GLFW.GetRequiredInstanceExtensions",
    "category": "method",
    "text": "GetRequiredInstanceExtensions()\n\nReturn a vector of names of Vulkan instance extensions.\n\n\n\n\n\n"
},

{
    "location": "#GLFW.SetWindowIcon",
    "page": "Home",
    "title": "GLFW.SetWindowIcon",
    "category": "function",
    "text": "GLFW.SetWindowIcon(window::Window, image::Matrix{NTuple{4, UInt8}})\n\nGLFW.SetWindowIcon(window::Window, images::Vector{<:AbstractMatrix{NTuple{4,UInt8}}})\n\nSet the window icon, where a single image may be passed or a vector of images with different icon sizes. The images must be of RGBA format. Before calling this function it might be necessary to reinterpret the image as a matrix of element type NTuple{4, UInt8}  if the icons are loaded with type RGBA{N0f8}\n\nExamples\n\nusing FileIO\nicons = load.([\"icon-16.png\", \"icon-32.png\", \"icon-128.png\"])\nbuffs = reinterpret.(NTuple{4, UInt8}, icons)\nGLFW.SetWindowIcon(win, buffs)\nGLFW.PollEvents() # needs a poll events to become active\n\n\n\n\n\n"
},

{
    "location": "#GLFW.VulkanSupported-Tuple{}",
    "page": "Home",
    "title": "GLFW.VulkanSupported",
    "category": "method",
    "text": "VulkanSupported()\n\nReturn whether the Vulkan loader has been found.\n\n\n\n\n\n"
},

{
    "location": "#GLFW.primarymonitorresolution-Tuple{}",
    "page": "Home",
    "title": "GLFW.primarymonitorresolution",
    "category": "method",
    "text": "Returns the monitor resolution of the primary monitor.\n\n\n\n\n\n"
},

{
    "location": "#GLFW.set_visibility!-Tuple{GLFW.Window,Bool}",
    "page": "Home",
    "title": "GLFW.set_visibility!",
    "category": "method",
    "text": "Sets visibility of OpenGL window. Will still render if not visible. Only applies to the root screen holding the opengl context.\n\n\n\n\n\n"
},

{
    "location": "#GLFW.standard_context_hints-Tuple{Any,Any}",
    "page": "Home",
    "title": "GLFW.standard_context_hints",
    "category": "method",
    "text": "Tries to create sensible context hints! Taken from lessons learned at: GLFW\n\n\n\n\n\n"
},

{
    "location": "#GLFW.standard_screen_resolution-Tuple{}",
    "page": "Home",
    "title": "GLFW.standard_screen_resolution",
    "category": "method",
    "text": "Takes half the resolution of the primary monitor. This should make for sensible defaults!\n\n\n\n\n\n"
},

{
    "location": "#GLFW.standard_window_hints-Tuple{}",
    "page": "Home",
    "title": "GLFW.standard_window_hints",
    "category": "method",
    "text": "Standard window hints for creating a plain context without any multisampling or extra buffers beside the color buffer\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GLFW]\nOrder = [:type, :function]"
},

]}
