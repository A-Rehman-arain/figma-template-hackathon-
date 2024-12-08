import ProductCard from './ProductCard'; // Importing the ProductCard component to display individual product cards
import Button from './Button'; // Importing a Button component (assumed to be a reusable button element)
import HeadingCenter from './HeadingCenter';

// Array holding the product details. Each object represents one product with details such as:
// url: the image path of the product
// popUp: label to show discounts or special tags (e.g., "New")
// title: name of the product
// description: brief description of the product
// discountPrice: discounted price of the product
// actualPrice: original price of the product (may be empty if no original price exists)
// forceHover: a custom property (optional) to force the hover effect on a specific card
const productArray = [{
    url: '/assets/Syltherine.png',
    popUp: '-30%',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    discountPrice: 'Rp 2.500.000',
    actualPrice: 'Rp 3.500.000'
},
{
    url: '/assets/leviosa.png',
    popUp: '',
    title: 'Leviosa',
    description: 'Stylish cafe chair',
    discountPrice: 'Rp 2.500.000',
    actualPrice: '',
    forceHover: true // This card will have the hover effect always enabled
},
{
    url: '/assets/Lolito.png',
    popUp: '-50%',
    title: 'Lolito',
    description: 'Luxury big sofa',
    discountPrice: 'Rp 7.000.000',
    actualPrice: 'Rp 14.000.000'
},
{
    url: '/assets/Respira.png',
    popUp: 'New',
    title: 'Respira',
    description: 'Outdoor bar table and stool',
    discountPrice: 'Rp 500.000',
    actualPrice: ''
},
{
    url: '/assets/Grifo.png',
    popUp: '',
    title: 'Grifo',
    description: 'Night lamp',
    discountPrice: 'Rp 1.500.000',
    actualPrice: ''
},
{
    url: '/assets/Muggo.png',
    popUp: 'New',
    title: 'Muggo',
    description: 'Small mug',
    discountPrice: 'Rp 150.000',
    actualPrice: ''
},
{
    url: '/assets/Pingky.png',
    popUp: '-50%',
    title: 'Pingky',
    description: 'Cute bed set',
    discountPrice: 'Rp 7.000.000',
    actualPrice: 'Rp 14.000.000'
},
{
    url: '/assets/Potty.png',
    popUp: 'New',
    title: 'Potty',
    description: 'Minimalist flower pot',
    discountPrice: 'Rp 500.000',
    actualPrice: ''
},
]

// The Products component serves as a container for the product listing.
const Products = () => {
    return (
        <div className='px-[30px] md:px-[60px] pb-[48px]'>
            {/* Title for the product section */}
            <HeadingCenter title="Our Products" />
            
            {/* Container for product cards */}
            <div className='mt-10 flex flex-wrap items-center justify-center gap-7'>
                {
                    // Mapping over the productArray to render a ProductCard for each product.
                    // The ProductCard receives props from the object for rendering individual card details.
                    productArray.map((product, index) => (
                        <ProductCard
                            key={index} // Using index as the key since each product is unique in this case
                            url={product.url} // Product image URL
                            label={product.popUp} // Discount or label badge
                            title={product.title} // Product title
                            description={product.description} // Product description
                            discount={product.discountPrice} // Discounted price
                            actual={product.actualPrice} // Original price
                            forceHover={product.forceHover || false} // Force hover behavior, default to false if undefined
                        />
                    ))
                }
            </div>
            
            {/* A Button component, possibly for "Load More" or other actions */}
            <Button />
        </div>
    )
}
export default Products
