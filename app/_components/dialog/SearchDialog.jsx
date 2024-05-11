import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const DialogComponent = ({
    title,
    label,
    description

}) => {
    return (
        <Dialog>
            <DialogTrigger className="md:w-[700px]">{label}</DialogTrigger>
            <DialogContent className="h-full md:h-[70%]">
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

export default DialogComponent