import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface FilterDialogProps {

    title: string,
    label:string,
    description:string
}
const FilterDialog: React.FC<FilterDialogProps> = ({
    title,
    label,
    description

}) => {
    return (
        <div className="shadow-xl border border-black">
             <Dialog >
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
        </div>
       
    )
}

export default FilterDialog