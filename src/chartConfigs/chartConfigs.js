export const historyOptions = {
    lineHeightAnnotation: {
        always: true,
        hover: false,
        lineWright: 1.5
    },
    animation: {
        duration: 2000
    },
    maintainAspectRatio: false,
    response: true,
    scales: {
        xAxes: [
            {
                type: "time",
                distribution: "linear",
            }
        ],
    }
}