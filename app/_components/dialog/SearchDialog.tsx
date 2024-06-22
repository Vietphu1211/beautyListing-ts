import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


interface SearchDialogProps {
    title: string
    label: string
    description:string
}
const SearchDialog: React.FC<SearchDialogProps> = ({
    title,
    label,
    description

}) => {
    return (
        <div className="shadow-xl ">
 <Dialog >
            <DialogTrigger className="w-full ">{label}</DialogTrigger>
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

export default SearchDialog