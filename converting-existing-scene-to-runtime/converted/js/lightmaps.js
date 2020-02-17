function assignLightmapsToMeshes(lightmappedMeshes) {
    lightmappedMeshes.forEach(function (currentMeshName) {
        // we first load the texture, based on name convention
        _r.load.texture("assets/lightmaps/" + currentMeshName + "_LM.jpg", {
            "coordinatesIndex": 1 // let's patch so it use UV2
        }).then(function (lightmap) {
            // now the texture is ready, we can assign it
            _r.select("*" + currentMeshName + "*:mesh").forEach(function (currentMesh) {
                const material = currentMesh.material;
                // in case of multimat, we have to cycle through it
                if (material.getClassName() === "MultiMaterial") {
                    material.subMaterials.forEach(function (subMaterial) {
                        subMaterial.lightmapTexture = lightmap;
                    });
                } else {
                    // if classic material, just assign the lightmap
                    material.lightmapTexture = lightmap;
                }
            });
        });
    });
}