import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormField = ({ control, name, label, placeholder, type = "text" }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="lable">{label}</FormLabel>
        <FormControl>
          <Input
            className="input"
            type={type}
            placeholder={placeholder}
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
