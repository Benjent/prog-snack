function applyBarTransition(cssProperty, self) {
    const gauges = self.querySelectorAll(".gauge")

    // Without timeout browser cannot trigger CSS transition
    window.setTimeout(() => {
        gauges.forEach((g) => {
            g.style[cssProperty] = g.dataset[cssProperty]
        })
    }, 0)
}

export {
    applyBarTransition,
}
