// Database of beats
const beatsDatabase = [
    {
        internalName: "beat1",
        displayName: "Trap Brass Beat",
        beatPic: "trapbrassbeaticon.jpg",
        previewSrc: "Trap_Brass_Beat.mp3",
        cost: "free",
        licenses: [
            { name: "Unlimited License", key: "G# Minor", bpm: "117" }
        ]
    },
    {
        internalName: "beat2",
        displayName: "Beat 2",
        beatPic: "Beaticon.png",
        previewSrc: "beat2_preview.mp3",
        cost: "free",
        licenses: [
            { name: "Unlimited License", key: "none", bpm: "none" }
        ]
    },
    {
        internalName: "beat3",
        displayName: "Beat 3",
        beatPic: "Beaticon.png",
        previewSrc: "beat3_preview.mp3",
        cost: "free",
        licenses: [
            { name: "Unlimited License", key: "none", bpm: "none" }
        ]
    },
    {
        internalName: "beat4",
        displayName: "Beat 4",
        beatPic: "Beaticon.png",
        previewSrc: "beat4_preview.mp3",
        cost: "free",
        licenses: [
            { name: "Unlimited License", key: "none", bpm: "none" }
        ]
    }
];

// Function to open dynamic beat page using query param
function goToBeat(internalName) {
    // Navigate to beatname.html with ?beat=internalName
    window.location.href = `beatname.html?beat=${internalName}`;
}

