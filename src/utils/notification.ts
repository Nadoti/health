import { toast } from "sonner";

type NotificationTypeProps = "success" | "error";

export function notification(type: NotificationTypeProps, message: string) {

  if(type === "success"){
    toast.success(message, {
      duration: 3000,
      invert: true,
    });
  }

  if(type === "error"){
    toast.error(message, {
      duration: 3000,
      invert: true,
    });
  }
  
}