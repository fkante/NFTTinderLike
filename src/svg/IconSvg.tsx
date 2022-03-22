import React from "react";

interface IconSvgProps {
  style?: string;
}

export default function IconSvg({ style }: IconSvgProps) {
  return (
    <svg
    className={style}
      viewBox="0 0 320 320"
    >
      <rect width="320" height="320" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_623_2" transform="scale(0.003125)" />
        </pattern>
        <image
          id="image0_623_2"
          width="320"
          height="320"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAAAM1BMVEX////9+fL78uT57Nf35sn137zz2a7x0qHwzJPuxobsv3jquWvos13mrFDkpkLinzXgmSdesWyWAAAMlklEQVR4nO2d2XrrKgyF7cRJ3DTDfv+n3U2bthnAaFgg0WhdnJuzvwr/YRBCiOFfSKXBugG9KwAqFQCVCoBKBUClAqBSAVCpAKhUAFQqACoVAJUKgEoFQKUCoFIBUKkAqFQAVCoAKhUAlQqASgVApQKgUgFQqQCoVABUKgAqFQCVCoBKBUClAqBSAVCpAKhUAFQqACoVAJUKgEoFQKUCoFIBUKkAqFQAVCoAKhUAlQqASgVApQKgUgFQqQCoVABUKgAqFQCVCoBKBUClAqBSAVApJMDj4W3eTNM43Gg9Tbv57XAEmvElDMDzYd6sh0Wtp/n9BDHmS3qA5/22wO5X4zQfAI32JCXA444M7wfiZv+XeqIG4HG34tK7ar0/w77AWGKAp1lK70vbPzKWhQDfNyp6n1rtsZ9iIwnA85uu8/0phHyA53ksoyEjfK/wTU3FBQjFd9HU+ZLMBIjGd9Fc58saiQVwD5r7HtR1J2QAPE5V8H1o7NilIQM872rhu6jf5ZgK8FBn9P5oV/UrK4oGsG73+9S28ofWEgngsXL365kgBeDcAN/Q6zxYBniutvg+qstdSRHgsYLrnNHYoz9YArhvhu9D6yafjFUB4LYlvy53dYsAz4CoH0/9nd4tATyzzzvUmpp9OEoLAJt4f4/qbiXOA2y4/N5o1fDbIcoCtOHXnzudA2jFr7tZMAPQjF93C3EaoCG/3oIKSYCW/IaxNQKdUgBN+fXmySQAnmz5dTaGnwEa7D/u1Zcr+AzQmt8wdBXVegLYOP6SUle+9CPARuH7RXV1QvcA8N0a3kVdbUbuARo7MN8yYiHSXWPNF+CrelpF7gA2D0Bn1FOqzC3AN2tw3+ppL3ID8GjN7Uc9nS39AvQyAQ69AqyfP0RWlwBdeIBX9Qjw7MMD/FJP8ZhvgF48mE/1tBW5AvQ0gPvaDH8BdDWAe5wDHa3AF3UH0I8L/aXuAPpxob/UG8CmSZQUdRZMcLaCDN0B9BDFv1df8UD1MfC0mT9UKnvCkTUUjgbdMdxq9zvczu+gE72ucs2Hkwbf4wHkCYJwY0JCqEH+yWPq/PYEGMk9eTH/5J85ZUq/6DthT4uwHGB+w692K7sqyiP9yKX0C+XhVGfJRTK9Lf5RXXCxp3CqFGDhG8+qGyY9HWoKARYdNU18duxqCpQBLCfSK+4Y1xrBx8PHfmmapo//HoB7RcknEvw0xUpcYSN83j+WORw3byA7gi8kjTHxBhvuRZ/eMr49pohhrU+UutPgGfC8X9oZjbPemuAbSX1fuoxA03tP29JA0CPkfyJtqy+MUSBPhA8kd3Sl3Djyv3HZh1b84YtwF+Xolb52qk5Y7RtFURnYCsKKq601CzL/I4l/WOIJonbBZ+Ypxajo+OyPpM5SEoCgONY7fycpX7vYpioCxKTEyEqNiAlW+0r+HLiCuIDvQhdeSpBtiDrP8z8BMYAVlW6E8yDbDrEH8v1AxAA+KI5ohSsJ2w5xDmRHExBnmbokM9kUwjZDBMjeC+tdaPU1A9E2iG+G9ne5Y4m4v1mQZvheJfHj+VZIXYUbS9DvgSHXrATDgG+E1FeYXqA+iIXJKhFMg3wjlNn+wPybWg8GdsuK7woIjBC23swOqPVggHXm2D+lwEb51Ic5A2o9GOQ1cXZbJEZKUy0z41A7Ae6hGbZcd0Bio/ArcSck5QQIzvDm/pwiI8v+EnNBVAZR4bfEmROyzMhS6ILJT5lNWaHMDS8+LTSSJcite77WTYA1ygTxUiOkVjJzLdeh0ATTK/FjdkGxldQ7PvxXM3QLSKUyVawuKDfzdCYtePBLd4xercwXpwuqDG3ffxie94JYsG4HUq9MGqddWlvraTfP20m0l9IlslUsM8fxBeu1oihdCKtqmT7GdqRmM5alc2Dq3jBlnPBXbceSPPPj5GlXbkhWvvkx9ke1W5KRjl+DMofk9lVvSVIb7/zoy0j9piSk8/90t1CIIgdWG7TlUclbngx+bUpkUHcjTRpzp43yfkGjIlXUUdKmNb+atAdwrWoEUV3BRs25aq3OwGpXooUYaGvWnkE9+V3UsMZS1WR6kbb6BMqWD00Q1+Fm7dHex7iobZlX2u/dqjW6yxhXtX0ogTbhtGkLovs1r3NNC1c2aYpu5/at1kX6aI87tWiJPnnyovY10kiOTP1mrED335o9tP0j0g9fvRW5+jxcGdSYIwUFazcCVZCXm7KJEGkSrNwG1P3pJiGsJ1Emn6oNGGFVsGzqhFN+/pr2lYkvNzJ66YQy/1Q0v4bxs3prkXJyXc+6MnHtVu09mKssAQL52VXJJYyhWqYxl38/ZVhnnbCKVLKMWz8MBzApf7uOYSQ/y7fGCKtIHcPAEoCmrx0TTpaq2EUWELN9ascGILIOtMUe+EblrVQFo8AF+N8/kz3wr8pzUQWjyDLQ1i91lCcjC5t0mb/UUd4Nw01CB7D5c6llPwZuMjmAt8K4oPEMSDldR1tM/2STLDLt4LGs5gDTW5C17GjTwWttrQFmXMDL/xKEB81HMCEeA7aXcWE+/x87wK95KwalYpux5jJz7vd2gnnCbr4GD80BZhbbn/0Y73achxdni7851lxmofjdT3Di1Gds22Qqbgug1nJe001MnhEpdPFkb1uAOWu37gg9z7dtNmBGbQHmZtz7oDzVp3bgxBBmbai13AT3cKpB86kdbEMGwmYYaSybjPMYUyH51A62IUNjgFljT/+S4lP7ePTYBcDUjqLoX3nYhgxOACbPNUqzs4dtyOAZYMmn9jGCfQDM5LYs+tRORnBbgLlj6Fxy0JJP7WQEtwWYiz7mgwJ5n9rJCG4MMOOcLGQH5XxqLyO4McCMb7LUmzI+tQ8vemgNcCGgn1V6MXaxD76oLcDMZjj/79dzugOyIlnrzXzRpgr0xgCTYziTHzRu9tnyE+RY9Li9yV457fG5mI0BJh2ZFMDVbilth7qErJ5ex6S/JkdU23hgOpvpKUFo/VaIxtCyysfkxwFexbhVa4CpLniHY9yW31SlpRTlntPD1gVoDTB1Lvfrkqx2pKNhUk7bQjACeRbQHGCieuZ1WprITyJTltPFYA7wPLSYYYkzddWzLzh9Lpb080xKB1wOhgHvdjY+WL/oaRBvdrysGMLXl4KJuPMUA4DaOyKEDlhO4oRNg0VLKEM3UuaoEjpg+SeCZTUULaEM3Up1z5DgA1IOlkFdsHzTBmPnQQqCBB+QVCYbNAsa5Eh/Sk6Q0HNomQ2Yhbh8Zwhi5llSgpSLSTR3EjOGLe6JfElGkOLAEcvSYW5plzOhIGZSEhUsonQbYpor5pKdyV25qwT1KkmbYOIPgwFYHkcQMxlx74bQCmwT/xgEIKF2EcJMVrmIU1q0HSy1QjYEoNmN9W+NjLx8YhyP+goJBCBhDCHMLCn1dpWGX1uAhN8fYWZRxE5IjiNTAULcGEL8F2GmIEr1bXocngoQ4kgT7CDMFLUtjWPGAxdUgIitHGXBApihaBkhZ7gRa9xDggmUi1UIO7TGZB3gA+8YjbZHhCTXUKZvhB2i1skDzQP3KJxW1AdyOmxewfJJj9kcpzf+IS7pwiKk2oeHGqrPWm3m/eFT81Y00VPiqZhjORdVfCuIEKTAxLJ81JHGq7wOg+L5TiqZ41UKE4PO1f3U0odruWugsoscveaA1uLJMyw7y9N7ImgtnLjgstt8vWgDVjZUe4TlFXl7UwmsMbkhOQMrJvt71QusxAuJe2SiPjESDLTYXNu7XniaofccqGcvSJvtNW5m1bZwQdTTHLDZvyO/r7v2IWrgOwBmRE6rsG6oU5FyEANgXvQyc9YtdSp6apl1S32K/ER9AEyLkZln3VSXooVSA2BWnGr21m31KLoPEwCTYpXKtW6sR7Hyaq0b61C8Ws3WrXUoVgcMgE9i3i2wbq47sZbgAPgs7otG1u31JvZtcesGexP7fpp1g52JHMkPgGnxr5hat9iXBG/iWTfZlST1Rqzb7EqSRy2t2+xJorfvrBvtSLIyD9atdiRZySrrVvsR8822APgg6bPc1u32InHFNOuGO5G8Zp91y51I+P5xALxK8ay5ddNdiHeMFAAfxUglCoAJqQpuBkAlvwDIPYULgPfSFm1+dYCkVz4DYFbK+e/lAQL4vTRA2jvHATAnzf4jAGriBwFwoD0RHQDz4pXHDYCPEh1gBsBvpQtWBECqIN7L6wKEdr8XBIjtfi8HcIVyXl4TYPoxzgBI1RY9el8LYLEYeABcUi18LwKwHr5XADjOFfH9fYATKGr1mgDHXdXO98cBjlvwpu2lADai90cBrmlPuWP0H9DuZwsrHuPIAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}
