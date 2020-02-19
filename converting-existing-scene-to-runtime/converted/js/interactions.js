_r.ready(function () {
    _r.load("assets/_interactions.glb").then(function (assets) {
        var interactionsRoot = _r.select(assets).select("__root__")[0]; // on BJS v3, gltf root is a Mesh Class (TransformNode on BJS v4)
        interactionsRoot.name = "__interactions__";
        interactionsRoot.rotate(new BABYLON.Vector3(0, 1, 0), BABYLON.Tools.ToRadians(180)); // as gltf use another axys convention, we have to rotate it from 180°

        _r.select(assets).addToScene();
        _r.patch(["assets/patches/interactions.patch"]);

        _r.select("_interact-lamp.000:mesh").on("OnPickTrigger", function () {
            clickOnLamp();
        });
    });
});

function clickOnLamp() {
    currentLampStatus = !currentLampStatus; // status just change
    assignLightmapsToMeshes(lightmappedMeshes); // lightmap update
    if (currentLampStatus) {
        // set back to initial value
        // as some values are not in the patchfile, we add them as text
        _r.patch(["assets/patches/tweaks.patch", {
            "*lampFabric01*:material": {
                "emissiveTexture": {
                    "level": 0.65
                }
            }
        }]);
    } else {
        // as I decided to use animation, I want to remove interactions during execution
        _r.select("_interact-lamp.000:mesh").off("OnPickTrigger");
        // emissive material (just for fun, bulb fading)
        _r.animate("*lampFabric01*:material", {
            "ambientColor": "#2e3851",
            "emissiveColor": "black",
            "emissiveTexture": {
                "level": 0
            }
        }, {
            "duration": 0.5,
            "easing": "easeOutCubic",
            "complete": function () {
                // of course, interaction have to be back
                _r.select("_interact-lamp.000:mesh").on("OnPickTrigger", function () {
                    clickOnLamp();
                });
            }
        });
    }
}