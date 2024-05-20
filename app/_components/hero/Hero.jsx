
import Image from 'next/image';
import BackgroundVideo from '../BackgroundVideo';
import { serviceData } from '@/app/_data/serviceData';
import Link from 'next/link';
import FilterForm from '../search/FilterForm';
import SearchForm from '../search/SearchForm';
import PostCardSkeleton from '../skeleton/PostCardSkeleton';
import Category from '../category/Category';
import CategoryList from '../category/CategoryList';


const Hero = () => {
    
    
    return (
        <section>
            <div className="w-full h-[550px] relative flex justify-center items-center ">
                {/* background: có thể sử dụng imgage hoặc video cho nền bg */}
                {/* <Image
                    src='https://plus.unsplash.com/premium_photo-1661290231745-15f1ed6fea88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='banner'
                    className='filter brightness-50 object-cover w-full h-full'
                    width={300}
                    height={150}
                /> */}
                <BackgroundVideo />
                <div className='container gap-10 absolute w-full top-[40%]'>
                    <h2 className='text-white text-center text-4xl font-semibold m-2'>
                        Tìm salon làm đẹp gần nơi bạn ở
                    </h2>
                    <div className='mt-10'>

                    <CategoryList />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero