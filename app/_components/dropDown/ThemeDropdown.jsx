import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown , MinusIcon, PlusIcon } from "lucide-react"
import ThemeButton from "../ThemeButton"


const ThemeDropdown = () => {
    return (
        <DropdownMenu className="relative">
            <DropdownMenuTrigger>
            <div className=" flex flex-row font-normal text-sm border-[1px] border-neutral-200 p-2 rounded-sm">
            <p className="text-neutral-500">
            Khách
            </p>
            <ChevronDown />
            </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[400px] h-min p-5 absolute -right-10 top-2"
            >
                {/* Header */}
                <DropdownMenuLabel>
                    <p>Chọn số lượng khách</p>
                </DropdownMenuLabel>
                {/* đường ngăn cách */}
                <DropdownMenuSeparator />
                {/* Body */}
                <div className="flex flex-col gap-3">
                    {/* item 1 */}
                    <div className="flex flex-row justify-between items-center">

                        <DropdownMenuItem>
                            <p className="text-base font-medium">Người lớn</p>
                        </DropdownMenuItem>
                        <div className="flex flex-row flex-none justify-around items-center gap-2 border-[1px] border-primary rounded-sm w-6/12 h-10">
                            <MinusIcon className="text-primary cursor-pointer" />
                            <p className="text-lg font-semibold">2</p>
                            <PlusIcon className="text-primary cursor-pointer" />
                        </div>
                    </div>

                    {/* item 2 */}
                    <div className="flex flex-row justify-between items-center">

                        <DropdownMenuItem>
                            <p className="text-base font-medium">Trẻ em</p>
                        </DropdownMenuItem>
                        <div className="flex flex-row flex-none justify-around items-center gap-2 border-[1px] border-primary rounded-sm w-6/12 h-10">
                            <MinusIcon className="text-primary cursor-pointer" />
                            <p className="text-lg font-semibold">0</p>
                            <PlusIcon className="text-primary cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="my-5">
                    <ThemeButton>Chọn</ThemeButton>
                </div>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeDropdown