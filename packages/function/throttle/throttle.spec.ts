import throttle from "./throttle"



describe("function throttle(throttled, wait, options)", () => {
    const sleep = (duration: number) =>
        (value: number) =>
            new Promise<number>((resolve =>
                setTimeout(resolve, duration, value)))

    context("options is not defined", () => {
        it("should increment a counter three times", async () => {
            const increment = throttle((x: number): number => ++x, 5)

            const counter = await Promise.resolve(0)
                .then(increment)
                .then(sleep(5))
                .then(increment)
                .then(sleep(5))
                .then(increment)

            expect(counter)
                .toEqual(3)
        })

        it("should increment a counter twice", async () => {
            const increment = throttle((x: number): number => ++x, 10)

            const counter = await Promise.resolve(0)
                .then(increment)
                .then(sleep(5))
                .then(increment)
                .then(sleep(5))
                .then(increment)

            expect(counter)
                .toEqual(2)
        })
    })
})
