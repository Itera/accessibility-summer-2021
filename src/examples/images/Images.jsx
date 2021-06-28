import React from "react";

export const Images = () => {
    return (
        <>
            <h2 className='mb-4'>Images</h2>
            <article className='col-sm-6'>
                <p className={'lead'}>
                    Images are used a lot in web pages, both for illustrative and decorative purposes. While decorative images
                    might be nice for those who can see them, they might be perceived as noise for those who don't, and should
                    thus be hidden for assistive technologies.
                </p>
                <p>
                    By adding an empty alt-tag, the image will be ignored by a screen reader. If not adding one at all, the
                    image source will be read (for some reason), which usually isn't pretty.
                </p>
            </article>

            <div className='row'>
                <div className='col-sm-6'>
                    <img className='img-fluid rounded' src='./dummy/itera-logo-blue.jpg' alt='' title='' loading={'lazy'} />
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-sm-6 mb-2'>
                    <h3>Responsive Images</h3>
                    <article>
                        <p className='lead'>
                            The picture-tag allows for specifying images for different view-sizes, which is perfect for optimization
                            of page loads, where the source sets will be validated from <i>top to bottom</i>, loading the first that fits.
                        </p>
                        <p>
                            This isn't necessarily making your solution more accessible, but showcases a very powerful semantic
                            HTML element
                        </p>
                    </article>
                    <picture>
                        <source media={'(max-width: 640px)'} srcSet={'./dummy/itera-logo-blue.jpg'}/>
                        <img className='img-fluid rounded' src='./dummy/itera-logo.png' alt='Itera logo' title='' loading={'lazy'} />
                    </picture>
                </div>
            </div>
        </>
    )
}