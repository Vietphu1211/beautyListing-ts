import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const FilterDialog = ({
    title,
    label,
    description

}) => {
    return (
        <Dialog className="shadow-xl border border-black">
            <DialogTrigger>{label}</DialogTrigger>
            <DialogContent className="h-full ">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default FilterDialog