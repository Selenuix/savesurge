import React from 'react';
import {Button} from "@/components/ui/button";

type SaveSettingsVariant = "default" | "password" | "changes";

interface SaveSettingsProps {
  variant?: SaveSettingsVariant;
}

export function SaveSettings({variant = "default"}: SaveSettingsProps) {
  const variants = {
    default: {
      text: "Save preferences",
    }, password: {
      text: "Update password",
    }, changes: {
      text: "Apply changes",
    }
  };

  const {text} = variants[variant];

  return (<div className="flex justify-start">
    <Button>
      {text}
    </Button>
  </div>);
}
