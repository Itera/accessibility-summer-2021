import React from "react";

export const Images = () => {
    return (
        <>
            <h2 className='mb-4'>Images</h2>
            <article className='col-sm-6'>
                <p className={'lead'}>
                    Images are used a lot in web pages, both for illustrative and decorative purposes. While decorative images
                    might be nice for those who can see them, they might be perceived as noise for those who don't, and should
                    thus be hidden for assistive technologies. This can be achieved by e.g. an empty alt-tag.
                </p>
                <p className={'lead'}>
                    The picture-tag allows for specifying images for different view-sizes, which is perfect for optimization
                    of page loads, where the source sets will be validated from <i>top to bottom</i>, loading the first that fits.
                </p>
            </article>

            <div className='row'>
                <div className='col-sm-6'>
                    <picture>
                        <source media={'(max-width: 640px)'} srcSet={'./dummy/itera-logo-blue.jpg'}/>
                        <img className='img-fluid rounded' src='./dummy/itera-logo.png' alt='Itera logo' title='' loading={'lazy'} />
                    </picture>
                </div>
                <div className='col-sm-6'>
                    <img className='img-fluid rounded' src='./dummy/itera-logo-blue.jpg' alt='' title='' loading={'lazy'} />
                </div>
            </div>
        </>
    )
}