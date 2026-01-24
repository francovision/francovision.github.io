// Database of beats
const beatsDatabase = [
    {
        internalName: "beat1",
        displayName: "Beat 1",
        beatPic: "Beaticon.png",
        previewSrc: "beat1_preview.mp3",
        cost: "free",
        licenses: [
            { name: "unlimited", key: "blah blah" }
        ]
    },
    {
        internalName: "beat2",
        displayName: "Beat 2",
        beatPic: "Beaticon.png",
        previewSrc: "beat2_preview.mp3",
        cost: "free",
        licenses: [
            { name: "unlimited", key: "blah blah" }
        ]
    },
    {
        internalName: "beat3",
        displayName: "Beat 3",
        beatPic: "Beaticon.png",
        previewSrc: "beat3_preview.mp3",
        cost: "free",
        licenses: [
            { name: "unlimited", key: "blah blah" }
        ]
    },
    {
        internalName: "beat4",
        displayName: "Beat 4",
        beatPic: "Beaticon.png",
        previewSrc: "beat4_preview.mp3",
        cost: "free",
        licenses: [
            { name: "unlimited", key: "blah blah" }
        ]
    }
];

// Function to open dynamic beat page
function goToBeat(internalName) {
    localStorage.setItem("selectedBeat", internalName);
    window.location.href = "beatname.html";
}
