(() => {
    let modelViewer = document.querySelector('#orbit-demo');
    let orbitCycle = [
        '75deg 55deg 4m',
        '-60deg 110deg 2m',
        '-180deg 90deg 2.4m',
        modelViewer.cameraOrbit
    ];
    setInterval(() => {
        let currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
        modelViewer.cameraOrbit =
            orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 4000); 
    })(); 