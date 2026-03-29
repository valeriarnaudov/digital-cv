import React from "react";
import { ActionBarContainer, ActionButton } from "../../styles/ActionBarElements";
import { FiDownload, FiShare2 } from "react-icons/fi";
import { toast } from "react-toastify";

function ActionBar({ username }) {
    const handlePrint = () => {
        window.print();
    };

    const handleShare = () => {
        const shareUrl = `${window.location.origin}/${username}`;
        navigator.clipboard.writeText(shareUrl);
        toast.success(`Ready to share! Link copied to clipboard.`, {
            icon: "🚀"
        });
    };

    return (
        <ActionBarContainer className="print-hidden">
            <ActionButton onClick={handleShare} title="Share CV">
                <FiShare2 size={20} />
                Share
            </ActionButton>
            <ActionButton onClick={handlePrint} title="Download PDF">
                <FiDownload size={20} />
                PDF
            </ActionButton>
        </ActionBarContainer>
    );
}

export default ActionBar;
