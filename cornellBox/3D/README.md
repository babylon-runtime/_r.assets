# Blender 2.79

- **cornellBox-2.79-babylon-standard.blend**: standard workflow scene using (not yet deprecated but soon) [Blender2Babylon exporter 5.6](https://github.com/BabylonJS/Exporters/tree/master/Blender), and exporting as:
    - `.babylon` file to `BJS-runtime/babylon-standard/` folder
    - `.obj` file to `BJS-runtime/obj/` folder (using [these settings](README/2.79-obj-settings.png))
    - `.stl` file to `BJS-runtime/stl/` folder (using default settings)
- **cornellBox-2.79-gltf.blend**: PBR workflow scene using (now deprecated) [gltf exporter](https://github.com/KhronosGroup/glTF-Blender-Exporter), and exporting as:
    - `.gltf` file to `BJS-runtime/gltf/` folder
    - `.glb` file to `BJS-runtime/glb/` folder

> This scene will soon be replaced by *cornellBox-2.80-gltf.blend* when Blender 2.8 will quit beta.

- **cornellBox-2.79-Cycles.blend**: precomputed Cycle scene serving as ligthmap rendering, and not for export. [Baketool addon](https://blendermarket.com/products/baketool) is used to render.

# Blender 2.8 (currently beta)

As Blender 2.8 is still in beta, we don't use it yet for our example exports.

- **cornellBox-2.80-babylon-standard.blend**:  standard workflow scene using [Blender2Babylon exporter 6.0](https://github.com/BabylonJS/Exporters/tree/master/Blender), exporting `.babylon` file
- **cornellBox-2.80-gltf.blend**:  PBR workflow scene using default Blender gltf addon, exporting `.gltf/.glb` file

