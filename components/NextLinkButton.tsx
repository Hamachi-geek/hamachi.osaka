import Link from "next/link"
import Button, { ButtonProps } from "./Button"

/** NextLinkButton へ渡すデータ */
type NextLinkButtonProps = {
    /** URL */
    href: string
} & ButtonProps

/** NextLink でラップした <Button> */
export default function NextLinkButton({ href, text, startIcon, variant, isDisabled, size}: NextLinkButtonProps) {
    
    return (
        <Link
            className="flex items-center no-underline text-inherit"
            rel="noopener noreferrer" 
            target="_blank"
            href={href}
        >
            <Button
                text={text}
                startIcon={startIcon}
                variant={variant}
                isDisabled={isDisabled}
                size={size} />
        </Link>
    )
}
