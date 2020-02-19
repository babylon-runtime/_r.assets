function assignLightmapsToMeshes(lightmappedMeshes) {
    lightmappedMeshes.forEach(function (currentMeshName) {
        _r.select("*" + currentMeshName + "*:mesh").forEach(function (currentMesh) {
            const material = currentMesh.material;
            // in case of multimat, we have to cycle through it
            if (material.getClassName() === "MultiMaterial") {
                material.subMaterials.forEach(function (subMaterial) {
                    assignLightmapToMaterial(currentMeshName, subMaterial);
                });
            } else {
                // if classic material, just assign the lightmap
                assignLightmapToMaterial(currentMeshName, material);
            }
        });
    });
}

function assignLightmapToMaterial(meshName, material) {
    if (currentLampStatus) {
        material.lightmapTexture = lightmapSet.on[meshName];
    } else {
        material.lightmapTexture = lightmapSet.off[meshName];
    }
}