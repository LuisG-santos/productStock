// Tremor Switch [v1.0.0]

import React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { tv, type VariantProps } from "tailwind-variants"

import { cn, focusRing } from "@/app/_lib/utils"

const switchVariants = tv({
  slots: {
    root: [
      "group relative isolate inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 shadow-inner outline-hidden ring-1 ring-inset",
      "bg-gray-200 dark:bg-gray-950",
      "ring-black/5 dark:ring-gray-800",
      // animação do track
      "transition-colors duration-300 ease-in-out",
      // checked
      "data-[state=checked]:bg-gray-500 dark:data-[state=checked]:bg-gray-500",
      // disabled...
      "data-disabled:cursor-default",
      "data-disabled:data-[state=checked]:bg-blue-200",
      "data-disabled:data-[state=checked]:ring-gray-300",
      "dark:data-disabled:data-[state=checked]:ring-gray-900",
      "dark:data-disabled:data-[state=checked]:bg-blue-900",
      "data-disabled:data-[state=unchecked]:ring-gray-300",
      "data-disabled:data-[state=unchecked]:bg-gray-100",
      "dark:data-disabled:data-[state=unchecked]:ring-gray-700",
      "dark:data-disabled:data-[state=unchecked]:bg-gray-800",
      focusRing,
    ],
    thumb: [
      "pointer-events-none relative inline-block transform appearance-none rounded-full border-none shadow-lg outline-hidden",
      "transition-transform duration-500 ease-in-out", // ou 500ms se quiser mais lento
      "bg-white dark:bg-gray-50",
      // disabled
      "group-data-disabled:shadow-none",
      "group-data-disabled:bg-gray-50 dark:group-data-disabled:bg-gray-500",
    ],
  },
  variants: {
    size: {
      default: {
        root: "h-5 w-9",
        thumb:
          "h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      },
      small: {
        root: "h-4 w-7",
        thumb:
          "h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0",
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SwitchProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    "asChild"
  >,
  VariantProps<typeof switchVariants> { }

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, size, ...props }: SwitchProps, forwardedRef) => {
  const { root, thumb } = switchVariants({ size })
  return (
    <SwitchPrimitives.Root
      ref={forwardedRef}
      className={cn(root(), className)}
      tremor-id="tremor-raw"
      {...props}
    >
      <SwitchPrimitives.Thumb className={cn(thumb())} />
    </SwitchPrimitives.Root>
  )
})

Switch.displayName = "Switch"

export { Switch }