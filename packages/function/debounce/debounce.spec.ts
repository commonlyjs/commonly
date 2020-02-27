import debounce from "./debounce"



describe("function debounce(debounced, wait, options)", () => {
    const sleep = (duration: number) =>
        (value: number) =>
            new Promise<number>((resolve =>
                setTimeout(resolve, duration, value)))

    context("options is not defined", () => {
        it("should increment a counter three times", async () => {
            const increment = debounce((x: number): number => ++x, 5)

            const counter = await Promise.resolve(0)
                .then(increment)
                .then(sleep(5))
                .then(increment)
                .then(sleep(5))
                .then(increment)

            expect(counter)
                .toEqual(3)
        })

        it("should increment a counter once", async () => {
            const increment = debounce((x: number): number => ++x, 10)

            const counter = await Promise.resolve(0)
                .then(increment)
                .then(sleep(5))
                .then(increment)
                .then(sleep(5))
                .then(increment)

            expect(counter)
                .toEqual(1)
        })
    })
})
