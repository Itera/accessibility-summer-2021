import React from "react";

export const Semantic = () => {
    return (
        <>
            <h2 className='mt-5'>Semantic HTML</h2>
            <article className='col-sm-6 mb-5'>
                <p className={'lead'}>
                    Semantic HTML should be used when possible, to alleviate the need for re-adding already existing
                    accessibility considerations, and to create web pages with meaningful structures.
                </p>
                <figure className='mt-5'>
                    <blockquote className='blockquote'>
                        <p>A semantic element clearly describes its meaning to both the browser and the developer.</p>
                    </blockquote>
                    <figcaption className='blockquote-footer'>
                        W3Schools
                    </figcaption>
                </figure>
            </article>
            <section className='mb-5 border border-1 p-5'>
                <div className='col-sm-6'>
                    <h3>Heading levels</h3>
                    <p className='lead'>
                        Heading levels should never skip a level (e.g. h3 following an h1), but multiple headings of the same
                        level is allowed
                    </p>
                </div>
                <h4>This is an H4</h4>
                <h5>This is an H5</h5>
                <h5>This is an H5</h5>
                <h6>This is an H6</h6>
                <h6 className='display-4'>This is also an H6 styled to look bigger, which is still allowed</h6>

            </section>
            <section className='mb-5 border border-1 p-5'>
                <div className='col-sm-6 mb-5'>
                    <h3 className='mb-2'>Semantic HTML Examples</h3>
                    <p className='lead'>
                        Following are a few examples of how semantic HTML should be used instead of the generic divs or spans
                    </p>
                </div>

                <h4 className={'mb-2'}>{'The <article>-tag for structuring text content'}</h4>
                <article className='mb-5'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas convallis dolor, eu dapibus elit blandit at. Pellentesque vel fringilla odio. Nam in nisl quis sem consequat tristique. Aenean convallis dignissim lectus, lacinia cursus diam tristique at. Pellentesque rutrum accumsan fermentum. Mauris hendrerit dapibus orci vel commodo. Sed neque nulla, lacinia in malesuada at, venenatis at ante. Donec elementum, ipsum id dignissim facilisis, mauris metus iaculis eros, id tempus arcu velit non ligula. Aliquam venenatis dolor sem, convallis placerat nibh imperdiet at. Vivamus et ultrices quam. Proin id mi enim. Pellentesque accumsan neque tempus egestas feugiat. Praesent eget lobortis libero. Nunc blandit rutrum felis a facilisis. Donec aliquam massa ut risus sagittis, vel sollicitudin purus congue. Fusce mattis arcu in risus sagittis imperdiet.</p>
                    <p>Morbi mattis justo magna, a laoreet sem accumsan sit amet. Pellentesque fermentum libero in nisi dictum auctor. Vestibulum fringilla consequat sodales. In pellentesque consectetur vehicula. Nullam ut laoreet metus. Donec euismod varius erat vitae malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ullamcorper ligula nunc, ac dignissim neque ullamcorper nec. Nulla ut est blandit, efficitur turpis id, rutrum velit. Vivamus eleifend turpis vitae tristique sollicitudin.</p>
                </article>
                <div className='mb-5 col-sm-6'>
                    <h4>{'The <ul>-tag for creating lists'}</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>Item 1</li>
                        <li className='list-group-item'>Item 2</li>
                        <li className='list-group-item'>Item 3</li>
                        <li className='list-group-item'>Item 4</li>
                    </ul>
                </div>
                <div className='mb-5'>
                    <h4>{'The <dl>-tag for creating key-value relationships '}</h4>
                    <dl className=''>
                        <dt>Name:</dt>
                        <dd>Test Testerson</dd>
                        <dt>Occupation:</dt>
                        <dd>Tester</dd>
                    </dl>
                </div>
            </section>
        </>
    )
}