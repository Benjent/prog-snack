const applyBarTransition = (cssProperty, self) => {
    const gauges = self.querySelectorAll(".gauge")

    // Without timeout browser cannot trigger CSS transition
    window.setTimeout(() => {
        gauges.forEach((g) => {
            g.style[cssProperty] = g.dataset.size
        })
    }, 0)
}

const applyChainedFadeIn = (self, selector, duration = 100) => {
    // Use alongside with fadeIn SCSS mixin
    const elementsToFade = self.querySelectorAll(selector)
    elementsToFade.forEach((e, index) => {
        // Without timeout browser cannot trigger CSS transition
        window.setTimeout(() => {
            e.style.opacity = 1
        }, index * duration)
    })
}

const applyChainedFadeInEarlyOnly = (self, selector, durationBeforeAllReveal, duration = 100) => {
    applyChainedFadeIn(self, selector, duration)

    // Only apply transition on visible covers, let instantly fade of the other, non-visible covers
    const elementsToFade = self.querySelectorAll(selector)
    window.setTimeout(() => {
        elementsToFade.forEach((c) => {
            c.style.opacity = 1
        })
    }, durationBeforeAllReveal)
}

export {
    applyBarTransition,
    applyChainedFadeIn,
    applyChainedFadeInEarlyOnly,
}
